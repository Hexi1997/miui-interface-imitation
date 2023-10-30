import "./App.css";
import { Header } from "./components/Header";
import { SectionFirstScreen } from "./components/Sections/SectionFirstScreen";
import { SectionSecond } from "./components/Sections/SectionSecond";

function App() {
  return (
    <main>
      <Header />
      <SectionFirstScreen />
      <div className="relative -mt-[800px]">
        <SectionSecond />
        <SectionSecond />
      </div>
    </main>
  );
}

export default App;
