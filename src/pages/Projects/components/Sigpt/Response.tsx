import style from "./Response.module.css";

const Response = ({n}) => {
  return (
    <>
      <div className={style["response-container"]}>
        {Array.from({ length: n }, (_, index) => (
          <div key={index} className="box">
            Div {index + 1}
          </div>
        ))}
      </div>
    </>
  );
};

export default Response;
