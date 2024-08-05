import Header from "./components/Header/Header";
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
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Timeline entries={timelineEntries} title={"Timeline"} />
      <Experience title={"Experience"} entries={ExperienceEntries} />
      <Publications title={"Publications"} entries={publicationEntries} />
      <Contact title={"Contact"} />
    </>
  );
};

export default App;
