import { Title } from "../Title/Title";

interface miscProp {
  title: string;
}

const Misc = ({ title }: miscProp) => {
  return (
    <>
      <Title title={title} />
      <p>
        During my free time I like taking photos, listening to music, and
        reading.
      </p>
      <p>
        Check out my GPT, <a href="/chat">siGPT</a>
      </p>
    </>
  );
};

export default Misc;
