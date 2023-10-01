import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const App = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Intro/>
                <Projects/>
            </main>
        </>
    )
}

export default App;