import style from "./Title.module.css";

interface SectionTitle {
  title: string;
}

const Title = ({ title }: SectionTitle) => {
  return (
    <div className={style.container}>
      <h3 id={`${title}`}>{title}</h3>
    </div>
  );
};

export { Title, type SectionTitle };
