import { Title } from "../Title/Title";

interface contactProp {
  title: string;
}

const Contact = ({ title }: contactProp) => {
  return (
    <>
      <Title title={title} />
      <p>
        Feel free to contact me at{" "}
        <a href="mailto:shayan@siranipour.io">shayan [a] siranipour [dot] io</a>{" "}
        or follow me on <a href="https://github.com/siranipour">GitHub</a> or{" "}
        <a href="http://linkedin.com/in/shayan-iranipour">LinkedIn</a>
      </p>
    </>
  );
};

export default Contact;
