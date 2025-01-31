import style from "./MessageInput.module.css";

const MessageInput = () => {
  return (
    <div className={style['textarea-container']}>
      <textarea
        className={style["prompt-input"]}
        placeholder="Enter prompt..."
      ></textarea>
    </div>
  );
};

export default MessageInput;
