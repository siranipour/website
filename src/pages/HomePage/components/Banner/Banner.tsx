import style from "./Banner.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.intro}>
        <div>
          <div className={style.name}>
            <h1 className={style.typewriter}>Shayan Iranipour</h1>
          </div>
          <h2 className={style.appear}>
            Quantitative Researcher, <br></br> Cambridge Theoretical Physics PhD
          </h2>
        </div>
        <div className={style.appear}>
          <Nav />
        </div>
      </div>
      <div className={`${style.abstract} ${style.appear}`}>
        <p>
          Hi <span className={style.wave}>👋</span>, I'm Shayan, a quantitative
          researcher building statistical models and trading systems for the
          financial markets. Before that, I finished my PhD from Cambridge
          working on concepts in theoretical physics; marrying ideas from
          Quantum Field Theory and deep learning. Feel free to{" "}
          <a href="/resume" target="_blank">
            check out my CV.
          </a>
        </p>
      </div>
    </div>
  );
};
export default Header;
