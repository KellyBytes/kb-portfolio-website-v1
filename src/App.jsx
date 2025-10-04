import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-linear-to-br from-[var(--bg-primary)] from-5% via-[var(--bg-secondary)] via-35% to-[var(--bg-tertiary)] text-[var(--c-primary)]">
        <NavBar />
        <div className="pt-56 lg:pt-0 lg:mt-0 lg:ml-[45%]">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
