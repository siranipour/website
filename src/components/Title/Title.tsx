import style from "./Title.module.css";

interface SectionTitle {
  title: string;
}

const Title = ({ title }: SectionTitle) => {
  return (
    <h3 className={style.container} id={`${title}`}>
      {title}
    </h3>
  );
};

export { Title, type SectionTitle };
