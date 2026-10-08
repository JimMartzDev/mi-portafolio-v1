import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-800">
      {/* Capa ambiental calibrada: halos de luz suaves, no una plasta verde completa */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
      radial-gradient(ellipse 60% 50% at 8% 12%, rgba(16, 185, 129, 0.16) 0%, transparent 70%),
      radial-gradient(ellipse 50% 40% at 92% 35%, rgba(5, 150, 105, 0.10) 0%, transparent 70%),
      radial-gradient(circle at 50% 90%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
      linear-gradient(180deg, #f7faf8 0%, #ffffff 50%, #f4f8f6 100%)
    `,
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <Contact />
      </div>
    </div>
  );
}
