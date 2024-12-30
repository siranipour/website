import { Link } from "react-router-dom";
import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <div className={style.notfound_container}>
        <div>404: Page Not Found 😔</div>
        <div>
          Try returning <Link to="/">home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
