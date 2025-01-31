import { useEffect, useState } from "react";
import { Title } from "../../../../components/Title/Title";
import RangeSlider from "../../../../components/RangeSlider/RangeSlider";
import MessageInput from "./MessageInput.tsx";
import Response from "./Response.tsx";
import style from "./Sigpt.module.css";

const SiGPT = () => {
  const [responses, setResponses] = useState(3);
  const [length, setLength] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(new Array(responses).fill(""));

  useEffect(() => {
    setContent(new Array(responses).fill(""));
  }, [responses]);

  const handleTextSubmit = (text: string) => {
    //TODO: remove this in production
    fetch(
      `http://localhost:8000/sigpt/?prompt=${text}&batches=${responses}&max_len=${length}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )
      //TODO: handle errors etc
      .then(response => response.json())
      .then(data => setContent(data.flatMap((obj) => obj.output)));
  };

  return (
    <>
      <Title title={"siGPT"} />
      <div>
        My attempt at reproducing the{" "}
        <a
          href="https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
          target="_blank"
        >
          GPT-2
        </a>{" "}
        124M model. The model was trained on 8x A100 GPUs for approximately 2
        and a half hours using{" "}
        <a href="https://lambdalabs.com" target="_blank">
          Lambda Labs
        </a>{" "}
        at a total cost of $25. The dataset used was the{" "}
        <a href="https://huggingface.co/datasets/allenai/c4" target="_blank">
          allenai-c4/en
        </a>{" "}
        dataset.
      </div>
      <div className={style["input-wrapper"]}>
        <div className={style["input-container"]}>
          <RangeSlider
            displayText={"Number of responses"}
            min={1}
            max={10}
            defaultValue={responses}
            onValueChange={setResponses}
          />
          <RangeSlider
            displayText={"Maximum response length"}
            min={1}
            max={50}
            defaultValue={length}
            onValueChange={setLength}
          />
          <MessageInput onTextSubmit={handleTextSubmit} />
        </div>
      </div>
      <Response content={content} />
    </>
  );
};

export default SiGPT;
