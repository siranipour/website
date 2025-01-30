import style from "./Response.module.css";

const Response = () => {
  return (
    <>
      <div className={style["response-container"]}>
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="box">
            Div {index + 1}
          </div>
        ))}
      </div>
    </>
  );
};

export default Response;
