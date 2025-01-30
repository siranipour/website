import style from "./MessageInput.module.css";

const MessageInput = () => {
  return (
    <textarea className={style['prompt-input']} placeholder="Enter prompt..."></textarea>
  );
};

export default MessageInput;

