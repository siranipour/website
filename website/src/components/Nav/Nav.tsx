import style from "./Nav.module.css";

const Nav = () => {
  const items = [
    "Education",
    "Experience",
    "Timeline",
    "Publications",
    "Contacts",
  ];
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
