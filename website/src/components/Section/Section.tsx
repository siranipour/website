import style from "./Section.module.css";
import { SectionTitle, Title } from "../Title/Title";

const Section = ({ title }: SectionTitle) => {
  return (
    <>
      <section className={style.sectionContainer}>
        <Title title={title} />
        <ul>
          <li>
            PhD - Department of Applied Mathematics and Theoretical Physics
          </li>
          <li>MMath - Masters of Mathematics</li>
          <li>BA - Natural Sciences</li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, non?
        </ul>
      </section>
    </>
  );
};

export default Section;
