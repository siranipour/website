import { motion } from "framer-motion"; // Import framer-motion
import { Title } from "../../components/Title/Title";
import BoidSimulation from "./components/Boid/Boid";
import SiGPT from "./components/Sigpt/Sigpt";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Title title={"Projects"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        Below are some projects I've worked on in my free time. You can find the
        source for these projects on my{" "}
        <a href="https://github.com/siranipour" target="_blank">
          GitHub
        </a>
        .
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <SiGPT />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <BoidSimulation />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
