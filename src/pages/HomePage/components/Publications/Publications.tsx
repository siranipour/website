import style from "./Publications.module.css";
import { Title } from "../../../../components/Title/Title";

interface Publication {
  title: string;
  date: string;
  journal: React.ReactNode;
  preprint: React.ReactNode;
}

const publicationEntries: Publication[] = [
  {
    title:
      "A new generation of simultaneous fits to LHC data using deep learning",
    date: "Jan 2022",
    journal: (
      <a
        href="https://link.springer.com/article/10.1007/JHEP05(2022)032"
        target="_blank"
      >
        JHEP
      </a>
    ),
    preprint: (
      <a href="https://arxiv.org/abs/2201.07240" target="_blank">
        2201.07240
      </a>
    ),
  },
  {
    title:
      "An open-source machine learning framework for global analyses of parton distributions",
    date: "Sep 2021",
    journal: (
      <a
        href="https://link.springer.com/article/10.1140/epjc/s10052-021-09747-9"
        target="_blank"
      >
        Eur.Phys.J.C
      </a>
    ),
    preprint: (
      <a href="https://arxiv.org/abs/2109.02671" target="_blank">
        2109.02671
      </a>
    ),
  },
  {
    title: "The path to proton structure at 1% accuracy",
    date: "Sep 2021",
    journal: (
      <a
        href="https://link.springer.com/article/10.1140/epjc/s10052-022-10328-7"
        target="_blank"
      >
        Eur.Phys.J.C
      </a>
    ),
    preprint: (
      <a href="https://arxiv.org/abs/2109.02653" target="_blank">
        2109.02653
      </a>
    ),
  },
  {
    title: "Parton distributions in the SMEFT from high-energy Drell-Yan tails",
    date: "Apr 2021",
    journal: (
      <a
        href="https://link.springer.com/article/10.1007/JHEP07(2021)122"
        target="_blank"
      >
        JHEP
      </a>
    ),
    preprint: (
      <a href="https://arxiv.org/abs/2104.02723" target="_blank">
        2104.02723
      </a>
    ),
  },
  {
    title: "The Strangest Proton?",
    date: "Aug 2020",
    journal: (
      <a
        href="https://link.springer.com/article/10.1140/epjc/s10052-020-08749-3"
        target="_blank"
      >
        Eur.Phys.J.C
      </a>
    ),
    preprint: (
      <a href="https://arxiv.org/abs/2009.00014" target="_blank">
        2009.00014
      </a>
    ),
  },
  {
    title: "Can New Physics hide inside the proton?",
    date: "May 2019",
    journal: (
      <a
        href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.123.132001"
        target="_blank"
      >
        Phys.Rev.Lett
      </a>
    ),
    preprint: (
      <a href="https://arxiv.org/abs/1905.05215" target="_blank">
        1905.05215
      </a>
    ),
  },
];

const Publications = ({
  entries,
  title,
}: {
  entries: Publication[];
  title: string;
}) => {
  return (
    <>
      <Title title={title} />
      <div>
        <p>
          Below are the research papers I published during my time as a PhD
          student.
        </p>
        <div className={style.table_container}>
          <table className={style.publication_table}>
            <tbody>
              {entries.map((entry, index) => {
                return (
                  <tr key={index}>
                    <td className={style.publication_date}>{entry.date}</td>
                    <td className={style.publication_title}>{entry.title}</td>
                    <td>{entry.preprint}</td>
                    <td>{entry.journal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { Publications, publicationEntries };
