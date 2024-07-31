import style from "./Contact.module.css";
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
        <a href="mailto:shayan@siranipour.io">shayan [a] siranipour [dot] io</a>
      </p>
    </>
  );
};

export default Contact;
