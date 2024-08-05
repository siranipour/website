import style from "./Nav.module.css";

const Nav = () => {
  const items = ["Timeline", "Experience", "Publications", "Contact"];
  return (
    <div className={style.navMenu}>
      {items.map((ele) => (
        <span>
          <a key={ele} href={`#${ele}`}>
            # {ele}
          </a>
        </span>
      ))}
    </div>
  );
};

export default Nav;
