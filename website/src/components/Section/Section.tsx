import style from "./Section.module.css";
import { SectionTitle, Title } from "../Title/Title";

const Section = ({ title }: SectionTitle) => {
  return (
    <>
      <section className={style.sectionContainer}>
        <Title title={title} />
      </section>
    </>
  );
};

export default Section;
