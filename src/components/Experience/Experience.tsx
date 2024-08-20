import style from "./Experience.module.css";
import { Title } from "../Title/Title";
import { motion } from "framer-motion";

interface ExperienceEntry {
  title: string;
  description: React.ReactNode;
}

const ExperienceEntries: ExperienceEntry[] = [
  {
    title: "Xantium Group",
    description: (
      <>
        <p>
          As a quant I have extensive experience applying machine learning
          techniques to large and noisy datasets for time series modelling. I
          make substantial use of Python on a daily basis, building reliable and
          performant production code that is deeply embedded in the mission
          critical code path for our trading systems. I am well versed in
          Pandas, xarray, and numpy; ML specific libraries such as pytorch,
          scikit-learn, and XGBoost/LightGBM amongst others, as well as general
          data science technologies such as Redis, SQL and data visualization
          tools like matplotlib, seaborn, plotly etc.
        </p>
      </>
    ),
  },
  {
    title: "Neural Network Parton Distribution Functions",
    description: (
      <p>
        During my PhD I was a core developer of the NNPDF collaboration,
        applying deep learning techniques to elucidate the inner workings of the
        proton. I built significant experience using Python (and some C++) to
        develop and open source the{" "}
        <a href="https://github.com/NNPDF/nnpdf/" target="_blank">
          code
        </a>
        . In maintaining the code base I became familiar with CI/CD, build
        systems, git/github, Linux, and bash scripting. I made extensive use of
        modern deep learning libraries such as TensorFlow and Keras as well as
        scientific libraries such as NumPy, scipy, sympy, dask, Numba etc. I
        gained experience with distributed compute workloads and technologies
        such as Slurm on our high performance cluster at Cambridge: CSD3.
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
    <motion.div
      className={style.experience_container}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.3,
        type: "spring",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
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
      {entries.map((entry, index) => {
        const props = {
          ...entry,
        };
        return <ExperienceElement key={index} {...props} />;
      })}
    </section>
  );
};

export { Experience, ExperienceEntries };
