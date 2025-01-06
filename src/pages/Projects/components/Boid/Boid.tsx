import { useEffect, useRef, useState } from "react";
import { Title } from "../../../../components/Title/Title";
import style from "./Boid.module.css";

import init, { Boid, Simulation } from "../../../../../boids/pkg/boids";

const Canvas = () => {
  let ref = useRef<HTMLCanvasElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {init().then(() => setIsInitialized(true))}, []);

  useEffect(() => {
    if (!isInitialized) return;

    const draw = (context, boids: Boid[]) => {
      let { height, width } = context.canvas;
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      boids.forEach((boid) => {
        context.save();
        context.translate(boid.x * width, boid.y * height);
        context.rotate(boid.theta);

        context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(-5, -5);
        context.lineTo(-5, 5);
        context.closePath();

        context.fillStyle = '#4A90E2';
        context.fill();
        context.restore();
      });
    };

    const canvas = ref.current;
    const context = canvas.getContext("2d");

    const s = new Simulation(100);

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
      <canvas ref={ref} width={800} height={600}/>
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
