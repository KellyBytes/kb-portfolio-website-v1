import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="portfolio-container flex flex-col lg:flex-row min-h-screen w-[clamp(18.75rem,6.1rem+63.25vw,82rem))] mx-auto text-[var(--c-primary)] relative">
        <nav className="navbar w-full h-auto lg:w-[40%] lg:h-[80vh] lg:sticky lg:top-[4.5rem] self-start">
          <NavBar />
        </nav>
        <div className="content flex-1">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
