import style from "./Banner.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.intro}>
        <div>
          <div className={style.name}>
            <h1 className={style.typewriter}>Shayan Iranipour</h1>
          </div>
          <h2 className={style.appear}>
            Senior Research Engineer, <br></br> Cambridge Theoretical Physics PhD
          </h2>
        </div>
        <div className={style.appear}>
          <Nav />
        </div>
      </div>
      <div className={`${style.abstract} ${style.appear}`}>
        <p>
          Hi <span className={style.wave}>👋</span>, I'm Shayan, a research
          engineer at{" "}
          <a href="https://www.isomorphiclabs.com/" target="_blank">
            Isomorphic Labs
          </a>{" "}
          working on AI for drug discovery. Previously a quant building
          statistical models and trading systems. I hold a PhD from Cambridge in
          theoretical physics and deep learning. Feel free to{" "}
          <a href="/resume" target="_blank">
            check out my CV
          </a>{" "}
          or some of my <Link to="/projects">projects</Link>.
        </p>
      </div>
    </div>
  );
};
export default Header;
