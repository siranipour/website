import { useEffect, useRef, useState } from "react";
import { Title } from "../../../../components/Title/Title";
import style from "./Boid.module.css";

import init, { Boid, Simulation } from "../../../../../boids/pkg/boids";

const Canvas = () => {
  let ref = useRef<HTMLCanvasElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeWasm = async () => {
      await init(); // Initialize WebAssembly
      setIsInitialized(true); // Update state once initialized
    };

    initializeWasm();
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const draw = (context, boids: Boid[]) => {
      let { height, width } = context.canvas;
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.fillStyle = "red";
      boids.forEach((boid) => {
        context.fillRect(boid.x * width, boid.y * height, 5.0, 5.0);
      });
    };

    const canvas = ref.current;
    const context = canvas.getContext("2d");

    const s = new Simulation(5);

    let animationId: number;
    const renderer = () => {
      s.randomize();
      draw(context, s.get_boids());
      animationId = window.requestAnimationFrame(renderer);
    };

    renderer();

    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, [isInitialized]);

  if (!isInitialized) {
    // Show a loading message while initializing
    return <div>Loading...</div>;
  }
  return (
    <>
      <canvas ref={ref} />
    </>
  );
};

const BoidSimulation = () => {
  return (
    <>
      <Title title={"Boids"} />
      <div>
        Below implements the Boids algorithm. The canvas rendering is handled by
        JavaScript, but the underlying computation is performed in Rust running
        directly in your browser through WebAssembly.
      </div>
      <div className={style["canvas-container"]}>
        <Canvas />
      </div>
    </>
  );
};

export default BoidSimulation;
