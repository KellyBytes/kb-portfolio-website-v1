import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-linear-to-br from-[var(--bg-primary)] from-10% via-[var(--bg-secondary)] via-40% to-[var(--bg-tertiary)] text-[var(--c-primary)] transition-colors duration-500">
        <NavBar />
        <div className="ml-[45%]">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
