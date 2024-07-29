import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import { Timeline, timelineEntries } from "./components/Timeline/Timeline";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Section title="Education" />
      <Timeline entries={timelineEntries} />
    </>
  );
};

export default App;
