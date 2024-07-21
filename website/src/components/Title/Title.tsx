import style from "./Title.module.css";

interface SectionTitle {
  title: string;
}

const Title = ({ title }: SectionTitle) => {
  return (
    <div className={style.container}>
      <h2 id={`${title}`}>{title}</h2>
    </div>
  );
};

export { Title, type SectionTitle };
