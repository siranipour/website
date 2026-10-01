import { useEffect, useRef, useState } from "react";
import { Title } from "../../../../components/Title/Title";
import { MAX_STEPS, resetState, rightProbability, State, step, terminated } from "./environment";
import style from "./CartPole.module.css";

type Status = "idle" | "loading" | "ready" | "error";

function draw(canvas: HTMLCanvasElement, state: State, action: number | null) {
  const context = canvas.getContext("2d");
  if (!context) return;
  const width = canvas.width;
  const height = canvas.height;
  const scale = width / 6;
  const x = width / 2 + state[0] * scale;
  const y = height * 0.7;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "#000000";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(0, y + 26);
  context.lineTo(width, y + 26);
  context.stroke();
  for (const boundary of [-2.4, 2.4]) {
    const edge = width / 2 + boundary * scale;
    context.setLineDash([5, 5]);
    context.beginPath();
    context.moveTo(edge, 25);
    context.lineTo(edge, height - 25);
    context.stroke();
  }
  context.setLineDash([]);
  context.fillStyle = "#000000";
  context.fillRect(x - 35, y - 16, 70, 32);
  for (const offset of [-22, 22]) {
    context.beginPath();
    context.arc(x + offset, y + 18, 8, 0, 2 * Math.PI);
    context.fill();
  }
  context.strokeStyle = "#4a90e2";
  context.lineWidth = 9;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + scale * Math.sin(state[2]), y - scale * Math.cos(state[2]));
  context.stroke();
  context.lineCap = "butt";
  context.fillStyle = "#000000";
  context.font = "16px monospace";
  context.fillText(action === null ? "Ready to balance" : action === 0 ? "← Push left" : "Push right →", 24, 32);
}

export default function CartPole() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const state = useRef<State>(resetState());
  const steps = useRef(0);
  const generation = useRef(0);
  const playing = useRef(false);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [outcome, setOutcome] = useState("");
  const [error, setError] = useState("");

  function play(value: boolean) {
    playing.current = value;
    setRunning(value);
  }

  function reset() {
    generation.current++;
    state.current = resetState();
    steps.current = 0;
    setScore(0);
    setOutcome("");
    if (canvas.current) draw(canvas.current, state.current, null);
  }

  useEffect(() => {
    if (canvas.current) draw(canvas.current, state.current, null);
    if (attempt === 0) return;
    let disposed = false;
    let frame = 0;
    let pending: Promise<void> = Promise.resolve();
    let session: import("onnxruntime-web").InferenceSession | undefined;
    setStatus("loading");
    setError("");

    async function initialize() {
      try {
        // Loaded on demand; both the runtime and its WASM are served by this site.
        const [ort, wasm, module] = await Promise.all([
          import("onnxruntime-web/wasm"),
          import("onnxruntime-web/ort-wasm-simd-threaded.wasm?url"),
          import("onnxruntime-web/ort-wasm-simd-threaded.mjs?url"),
        ]);
        if (disposed) return;
        ort.env.wasm.numThreads = 1; // No cross-origin isolation headers required.
        ort.env.wasm.wasmPaths = { wasm: wasm.default, mjs: module.default };
        session = await ort.InferenceSession.create(
          `${import.meta.env.BASE_URL}models/cartpole.onnx`,
          { executionProviders: ["wasm"] },
        );
        if (disposed) {
          await session.release();
          return;
        }
        setStatus("ready");
        play(true);
        let previous = 0;
        const tick = async (time: number) => {
          if (disposed) return;
          if (playing.current && time - previous >= 20 && !document.hidden) {
            previous = time;
            const currentGeneration = generation.current;
            try {
              const result = await session!.run({
                state: new ort.Tensor("float32", Float32Array.from(state.current), [1, 4]),
              });
              if (disposed) return;
              if (playing.current && currentGeneration === generation.current) {
                const probability = rightProbability(result.logits.data as Float32Array);
                const action = Math.random() < probability ? 1 : 0;
                state.current = step(state.current, action);
                steps.current++;
                setScore(steps.current);
                if (canvas.current) draw(canvas.current, state.current, action);
                if (terminated(state.current) || steps.current >= MAX_STEPS) {
                  play(false);
                  setOutcome(steps.current >= MAX_STEPS ? "Balanced for all 500 steps!" : "Episode ended — try another reset.");
                }
              }
            } catch (cause) {
              if (disposed) return;
              play(false);
              setStatus("error");
              setError(cause instanceof Error ? cause.message : String(cause));
              return;
            }
          }
          if (!disposed) frame = requestAnimationFrame((next) => { pending = tick(next); });
        };
        frame = requestAnimationFrame((time) => { pending = tick(time); });
      } catch (cause) {
        if (!disposed) {
          play(false);
          setStatus("error");
          setError(cause instanceof Error ? cause.message : String(cause));
        }
      }
    }
    void initialize();
    return () => {
      disposed = true;
      playing.current = false;
      cancelAnimationFrame(frame);
      // Do not release the WASM session while an inference is still in flight.
      void pending.then(() => session?.release());
    };
  }, [attempt]);

  return (
    <section>
      <Title title="CartPole" />
      <p>
        A reinforcement-learning agent I trained in JAX using REINFORCE learns to balance a pole
        by pushing the cart left or right. The exported ONNX policy runs entirely
        in your browser using WebAssembly.
      </p>
      <div className={style.demo}>
        <div className={style.canvasContainer}>
          <canvas ref={canvas} width={900} height={400} aria-label="CartPole simulation controlled by a trained reinforcement-learning agent" />
        </div>
        <div className={style.controls}>
          {status !== "ready" ? (
            <button disabled={status === "loading"} onClick={() => { reset(); setAttempt((value) => value + 1); }}>
              {status === "loading" ? "Loading model…" : status === "error" ? "Retry" : "Run agent"}
            </button>
          ) : (
            <>
              <button disabled={Boolean(outcome)} onClick={() => play(!running)}>{running ? "Pause" : "Resume"}</button>
              <button onClick={() => { reset(); play(true); }}>Reset episode</button>
            </>
          )}
          <span>Reward: {score} / {MAX_STEPS}</span>
        </div>
        <p className={style.message} role="status">{outcome || (status === "ready" ? "Policy samples left/right actions at 50 steps per second." : "Click Run agent to load the model.")}</p>
        {error && <p className={style.error} role="alert">Unable to run the model: {error}</p>}
      </div>
    </section>
  );
}
