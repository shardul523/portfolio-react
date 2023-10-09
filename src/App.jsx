import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default App;
