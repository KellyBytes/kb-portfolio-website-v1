import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen text-[var(--c-primary)] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
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
