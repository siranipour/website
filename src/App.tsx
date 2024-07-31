import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
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
      <Publications entries={publicationEntries} title={"Publications"} />
      <Contact />
    </>
  );
};

export default App;
