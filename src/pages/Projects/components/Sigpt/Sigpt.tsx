import { Title } from "../../../../components/Title/Title";
import MessageInput from "./MessageInput.tsx";
import style from "./Sigpt.module.css";

const SiGPT = () => {
  return (
    <>
      <Title title={"siGPT"} />
      <div>
        My attempt at reproducing the 124M{" "}
        <a
          href="https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
          target="_blank"
        >
          GPT-2
        </a>{" "}
        model. The model was trained on 8x A100 GPUs for approximately 2 and a
        half hours using{" "}
        <a href="https://lambdalabs.com" target="_blank">
          Lambda Labs
        </a>{" "}
        at a total cost of $25. The dataset used was the{" "}
        <a href="https://huggingface.co/datasets/allenai/c4" target="_blank">
          allenai-c4/en
        </a>{" "}
        dataset.
      </div>
      <MessageInput />
    </>
  );
};

export default SiGPT;
