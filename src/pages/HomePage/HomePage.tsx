import Header from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import {
  Experience,
  ExperienceEntries,
} from "./components/Experience/Experience";
import { Timeline, timelineEntries } from "./components/Timeline/Timeline";
import {
  Publications,
  publicationEntries,
} from "./components/Publications/Publications";
import Misc from "./components/Misc/Misc";

const HomePage = () => {
  return (
    <>
      <Header />
      <Timeline entries={timelineEntries} title={"Timeline"} />
      <Experience title={"Experience"} entries={ExperienceEntries} />
      <Publications title={"Publications"} entries={publicationEntries} />
      <Misc title={"Misc"} />
      <Contact title={"Contact"} />
    </>
  );
};

export default HomePage;
