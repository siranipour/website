import style from "./Contact.module.css";
import { Title } from "../Title/Title";

const Contact = () => {
  return (
    <>
      <Title title={"Contact"} />
      <p>
        Feel free to contact me at{" "}
        <a href="mailto:shayan@siranipour.io">shayan [a] siranipour [dot] io</a>
      </p>
    </>
  );
};

export default Contact;
