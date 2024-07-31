import style from "./Nav.module.css";

const Nav = () => {
  const items = ["Timeline", "Publications", "Contact"];
  return (
    <div className={style.navMenu}>
      {items.map((ele) => (
        <a key={ele} href={`#${ele}`}>
          # {ele}
        </a>
      ))}
    </div>
  );
};

export default Nav;
