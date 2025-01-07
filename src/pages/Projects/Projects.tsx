import { Title } from "../../components/Title/Title";
import BoidSimulation from "./components/Boid/Boid";

const Projects = () => {
  return (
    <>
      <Title title={"Projects"} />
      <div>Below are some projects I've worked on in my free time.</div>
      <BoidSimulation />
    </>
  );
};

export default Projects;
