import { Title } from "../../components/Title/Title";
import BoidSimulation from "./components/Boid/Boid";
import SiGPT from "./components/Sigpt/Sigpt";

const Projects = () => {
  return (
    <>
      <Title title={"Projects"} />
      <div>
        Below are some projects I've worked on in my free time. You can find the
        source for these projects on my{" "}
        <a href="https://github.com/siranipour" target="_blank">
          GitHub
        </a>.
      </div>
      <SiGPT />
      <BoidSimulation />
    </>
  );
};

export default Projects;
