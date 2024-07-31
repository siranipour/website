import style from "./Timeline.module.css";
import { Title } from "../Title/Title";

interface TimelineEntry {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  description: string;
}

const timelineEntries: TimelineEntry[] = [
  {
    title: "Xantium Group",
    subtitle: "Quantitative researcher",
    startDate: "2022-01-01",
    endDate: "Present",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae autem culpa iusto sapiente unde voluptas ullam ipsa blanditiis iure hic quaerat, facere enim eveniet ex, doloremque dolores numquam at deleniti reprehenderit asperiores fuga neque facilis? Facilis eveniet necessitatibus rem aut quisquam voluptate porro dolorum itaque! Earum officiis aspernatur laboriosam, fugiat itaque iusto sit rerum amet fuga nihil saepe provident quidem dolores, corrupti nemo debitis asperiores expedita, deserunt odio! Dolorem, excepturi vero quidem cumque magni, deleniti sequi blanditiis tempore sit accusantium distinctio! Tempore iusto sequi maiores asperiores blanditiis, officia tenetur illum?",
  },
  {
    title: "PhD",
    subtitle: "Department of Applied Mathematics and Theoretical Physics",
    startDate: "2012-01-01",
    endDate: "2024-01-01",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iure a culpa unde obcaecati, minima rerum, quo ullam iste numquam consequatur quis repellendus fuga repellat minus doloribus nisi magni sint ducimus sequi aperiam neque nobis praesentium ut. Nostrum iusto optio accusantium, beatae excepturi reiciendis tempora assumenda error voluptas odio! Sequi.",
  },
  {
    title: "Master of Mathematics",
    subtitle: "Department of Applied Mathematics and Theoretical Physics",
    startDate: "2012-01-01",
    endDate: "2024-01-01",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro incidunt praesentium maiores totam quam sapiente necessitatibus modi expedita pariatur provident.",
  },
  {
    title: "Bachelor of Arts",
    subtitle: "Natural Sciences",
    startDate: "2012-01-01",
    endDate: "2024-01-01",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro incidunt praesentium maiores totam quam sapiente necessitatibus modi expedita pariatur provident.",
  },
];

const TimelineElement = ({
  title,
  subtitle,
  startDate,
  endDate,
  description,
}: TimelineEntry) => {
  return (
    <>
      <div className={style["timeline-entry"]}>
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          {startDate} to {endDate}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
};

const Timeline = ({
  entries,
  title,
}: {
  entries: TimelineEntry[];
  title: string;
}) => {
  return (
    <section className={style.timeline}>
      <Title title={title} />
      {entries.map((entry, index) => {
        const props = {
          ...entry,
        };
        return <TimelineElement key={index} {...props} />;
      })}
    </section>
  );
};

export { Timeline, timelineEntries };
