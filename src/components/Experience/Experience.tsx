import style from "./Experience.module.css";
import { Title } from "../Title/Title";

interface ExperienceEntry {
  title: string;
  description: React.ReactNode;
}

const ExperienceEntries: ExperienceEntry[] = [
  {
    title: "Xantium Group",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        doloribus placeat ut voluptatibus dicta laborum, sunt amet non vel
        quibusdam, odio, accusantium optio nisi fugiat aspernatur recusandae
        quis ducimus deleniti reprehenderit magni consequatur quas perferendis!
        Maxime exercitationem tempora mollitia officia recusandae aliquid odit
        reiciendis dicta quod repellat. Error, nesciunt. Quia, a cupiditate
        temporibus iste illum dignissimos fugit sed deserunt magni quam non,
        officia dolores doloribus debitis amet itaque. Officia asperiores
        voluptate odit tempore optio sapiente quod animi, sint harum est cum!
        Laboriosam ex fugit laudantium deserunt illo corrupti asperiores
        architecto?
      </p>
    ),
  },
  {
    title: "Neural Network Parton Distribution Functions",
    description: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia,
        iste ullam eius quis, cupiditate et debitis mollitia laudantium earum
        nihil tempore suscipit aperiam fugiat recusandae maiores odit. Id,
        omnis!
      </p>
    ),
  },
  {
    title: "Mathematics Undergraduate Supervisor",
    description: (
      <p>
        During my PhD I tried to do as much teaching as I could. I taught
        undergraduate mathematics courses in dynamics and relativity,
        differential equations, and classical dynamics. I also spent some time
        as an examiner for the STEP undergraduate admissions exam.
      </p>
    ),
  },
];

const ExperienceElement = ({ title, description }: ExperienceEntry) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};

const Experience = ({
  title,
  entries,
}: {
  title: string;
  entries: ExperienceEntry[];
}) => {
  return (
    <section>
      <Title title={title} />
      <div className={style.experience_container}>
        {entries.map((entry, index) => {
          const props = {
            ...entry,
          };
          return <ExperienceElement key={index} {...props} />;
        })}
      </div>
    </section>
  );
};

export { Experience, ExperienceEntries };
