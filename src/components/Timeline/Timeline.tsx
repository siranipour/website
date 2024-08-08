import style from "./Timeline.module.css";
import { Title } from "../Title/Title";

interface TimelineEntry {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  description: React.ReactNode;
}

const timelineEntries: TimelineEntry[] = [
  {
    title: "Xantium Group",
    subtitle: "Quantitative researcher",
    startDate: "2022-02-28",
    endDate: "Present",
    description: (
      <p>
        <a href="https://www.xantium.com/">Xantium</a>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae autem
        culpa iusto sapiente unde voluptas ullam ipsa blanditiis iure hic
        quaerat, facere enim eveniet ex, doloremque dolores numquam at deleniti
        reprehenderit asperiores fuga neque facilis? Facilis eveniet
        necessitatibus rem aut quisquam voluptate porro dolorum itaque! Earum
        officiis aspernatur laboriosam, fugiat itaque iusto sit rerum amet fuga
        nihil saepe provident quidem dolores, corrupti nemo debitis asperiores
        expedita, deserunt odio! Dolorem, excepturi vero quidem cumque magni,
        deleniti sequi blanditiis tempore sit accusantium distinctio! Tempore
        iusto sequi maiores asperiores blanditiis, officia tenetur illum?
      </p>
    ),
  },
  {
    title: "PhD",
    subtitle: "Department of Applied Mathematics and Theoretical Physics",
    startDate: "2018-10-02",
    endDate: "2022-02-21",
    description: (
      <p>
        During my masters year, I was fortunate enough to be selected from a
        4-hour admissions exam for a PhD at{" "}
        <a href="https://www.damtp.cam.ac.uk/">DAMTP</a> to research high-energy
        particle physics theory with{" "}
        <a href="https://www.damtp.cam.ac.uk/person/mu227">
          Professor Maria Ubiali
        </a>
        . If you're interested, feel free to take a look at{" "}
        <a href="https://www.repository.cam.ac.uk/items/6d92ca76-9aac-4be5-aefc-99d49a27406f">
          my thesis
        </a>
        : Precision QCD and Effective Field Theories with Machine Learning.
      </p>
    ),
  },
  {
    title: "Master of Mathematics",
    subtitle: "Department of Applied Mathematics and Theoretical Physics",
    startDate: "2017-10-03",
    endDate: "2018-06-15",
    description: (
      <p>
        After specializing in theoretical physics during my undergrad, I decided
        to continue with my studies by undertaking{" "}
        <a
          href="https://en.wikipedia.org/wiki/Part_III_of_the_Mathematical_Tripos"
          target="_blank"
        >
          part III
        </a>{" "}
        of the Mathematical Tripos for my masters. I studied courses in
        fundamental physics such as Quantum Field Theory, String Theory, General
        Relativity, or Supersymmetry. I graduated with a distinction from this
        course.
      </p>
    ),
  },
  {
    title: "Bachelor of Arts",
    subtitle: "Natural Sciences",
    startDate: "2014-10-07",
    endDate: "2017-06-16",
    description: (
      <p>
        At Cambridge, I did my undergrad in{" "}
        <a href="https://www.undergraduate.study.cam.ac.uk/courses/natural-sciences-ba-hons-msci">
          natural sciences
        </a>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro incidunt
        praesentium maiores totam quam sapiente necessitatibus modi expedita
        pariatur provident.
      </p>
    ),
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
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
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
