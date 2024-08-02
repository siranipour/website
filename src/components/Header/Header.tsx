import style from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.intro}>
          <div>
            <div className={style.name}>
              <h1 className={style.typewriter}>Shayan Iranipour</h1>
            </div>
            <h2>
              Quantitative Researcher, <br></br> Cambridge Theoretical Physics
              PhD
            </h2>
          </div>
          <Nav />
        </div>
        <div className={style.abstract}>
          Nisi sit qui et esse. In quis culpa occaecat qui aute officia. Eiusmod
          ea nulla et reprehenderit do. Proident incididunt sint dolore do
          excepteur irure officia fugiat ex in occaecat Lorem non officia.
          Cillum mollit Lorem reprehenderit elit commodo nulla elit magna
          ullamco excepteur pariatur esse laborum eiusmod. Sit non officia
          mollit id exercitation id. Labore dolor fugiat id commodo minim
          exercitation.
          <p></p>
        </div>
      </div>
    </>
  );
};
export default Header;
