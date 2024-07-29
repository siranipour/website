import style from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.bio}>
          <div>
            <h1>Shayan Iranipour</h1>
            <h2>
              Quantitative Researcher, <br></br> Cambridge Theoretical Physics
              PhD
            </h2>
          </div>
          <Nav />
        </div>
        <div className={style.about}>
          Nisi sit qui et esse. In quis culpa occaecat qui aute officia. Eiusmod
          ea nulla et reprehenderit do. Proident incididunt sint dolore do
          excepteur irure officia fugiat ex in occaecat Lorem non officia.
          Cillum mollit Lorem reprehenderit elit commodo nulla elit magna
          ullamco excepteur pariatur esse laborum eiusmod. Sit non officia
          mollit id exercitation id. Labore dolor fugiat id commodo minim
          exercitation.
        </div>
      </div>
    </>
  );
};

export default Header;
