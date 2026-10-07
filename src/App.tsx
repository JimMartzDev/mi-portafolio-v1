import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
