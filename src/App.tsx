import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
