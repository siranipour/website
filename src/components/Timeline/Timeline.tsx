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
        After wrapping up my PhD I joined{" "}
        <a href="https://www.xantium.com/">Xantium</a> as a Quantitative
        Researcher. I build algorithmic trading strategies for the financial
        markets and have accrued experience working on time series and
        statistical modelling with large, noisy, low signal-to-noise ratio
        datasets. I make extensive use of Python building robust, reliable, and
        performant code.
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
        I was fortunate enough to be selected, after a 4-hour admissions
        examination, for a high-energy physics PhD at{" "}
        <a href="https://www.damtp.cam.ac.uk/" target="_blank">
          DAMTP
        </a>{" "}
        to research particle physics theory with{" "}
        <a href="https://www.damtp.cam.ac.uk/person/mu227" target="_blank">
          Professor Maria Ubiali
        </a>
        . My research focussed on blending deep learning, quantum
        chromodynamics, and effective field theories to extract the inner
        workings of the proton from particle collider experiments. During my PhD
        I was a member of the{" "}
        <a href="https://nnpdf.mi.infn.it" target="_blank">
          NNPDF
        </a>{" "}
        collaboration, producing neural network parameterizations of the proton
        which are actively being used by the research community. Feel free to
        take a look at{" "}
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
        Relativity, or Supersymmetry. I graduated from my masters with a
        distinction.
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
        </a>{" "}
        starting out with a broad span of scientific disciplines from physics to
        materials sciences and chemistry. Over the years I specialized
        exclusively in theoretical physics and mathematics, having picked up
        some computational physics methods on the way. I graduated with a Double
        First at the end of my BA.
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
