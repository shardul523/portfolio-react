import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default App;
