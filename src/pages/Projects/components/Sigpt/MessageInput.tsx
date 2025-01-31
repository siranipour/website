import { useState } from "react";
import style from "./MessageInput.module.css";

import { IconButton } from "@radix-ui/themes";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const MessageInput = ({ onTextSubmit, loading }) => {
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
      <div className={style["submit-button-container"]}>
        <IconButton
          loading={loading}
          onClick={() => onTextSubmit(text)}
          radius="full"
          variant="soft"
        >
          <PaperPlaneIcon width="20" height="20" />
        </IconButton>
      </div>
    </div>
  );
};

export default MessageInput;
