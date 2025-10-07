import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="w-screen min-h-screen text-[var(--c-primary)] bg-gradient-to-br from-[var(--bg-primary)] from-5% via-[var(--bg-secondary)] via-35% to-[var(--bg-tertiary)]">
        <NavBar />
        <div className="lg:pt-0 lg:mt-0 lg:ml-[45%]">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
