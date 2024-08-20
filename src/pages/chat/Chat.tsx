import { Title } from "../../components/Title/Title";
import style from "./Chat.module.css";

const Chat = () => {
  return (
    <>
      <Title title="siGPT" />
      <div className={style.input}>
        <input></input>
        <button>Go!</button>
      </div>
      <div className={style.responses}>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, illum!
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, illum!
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, illum!
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, illum!
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, illum!
        </div>
      </div>
    </>
  );
};

export default Chat;
