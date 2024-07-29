import Header from "./components/Header/Header";
import { Timeline, timelineEntries } from "./components/Timeline/Timeline";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Timeline entries={timelineEntries} title={"Timeline"} />
    </>
  );
};

export default App;
