import { useState } from "react";
import style from "./MessageInput.module.css";

const MessageInput = ({ onTextSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent the default behavior (like adding a new line)
      onTextSubmit(text);
    }
  };

  return (
    <div className={style["textarea-container"]}>
      <textarea
        className={style["prompt-input"]}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter prompt..."
      ></textarea>
    </div>
  );
};

export default MessageInput;
