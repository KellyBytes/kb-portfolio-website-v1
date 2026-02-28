import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { socialIcons } from '../data';

const NavBar = () => {
  const { darkMode, toggleDarkMode, isThemeChanging } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const isScrollingRef = useRef(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    isScrollingRef.current = true; // scrolled by clicking the links, not manual scrolling
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return; // when scrolling by clicking the links

      const sections = ['home', 'projects', 'contact'];
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(sectionId);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        className={`h-full flex flex-col justify-between lg:items-start px-2 lg:px-0 pt-18 sm:pt-20 pb-4 lg:pt-0 lg:pb-0 z-40 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition-opacity ease-in duration-1500`}
      >
        <div className="h-full flex flex-col justify-between lg:justify-start gap-y-6 lg:gap-y-12">
          <div className="flex flex-col items-start w-full gap-y-0 lg:gap-y-4">
            <a
              href="#"
              className="text-[var(--c-tertiary)] font-bold text-[clamp(2.25rem,2rem+1.25vw,3.5rem)] text-shadow-lg"
              onClick={e => handleNavClick(e, 'home')}
            >
              Eriko Iwashita
            </a>
            <h2 className="text-[var(--c-secondary)] font-medium text-[clamp(1.125rem,1.1rem+0.125vw,1.25rem)] text-shadow-md">
              Front-End Developer | Full-Stack Developer
            </h2>
            <p className="hidden lg:block lg:w-80 text-wrap text-shadow-sm font-light">
              Building accessible, scalable, and user-focused web applications
              with modern technologies.
            </p>
          </div>

          {/* SNS icons for mobile */}
          <div className="lg:hidden flex flex-row gap-x-4">
            {socialIcons.map((social, index) => (
              <a
                href={social.url}
                key={index}
                className={`text-lg md:text-xl text-[var(--c-primary)] hover:text-[var(--c-secondary)] ${
                  isThemeChanging
                    ? 'transition-none'
                    : 'transition duration-300'
                }`}
                target="_blank"
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Navigation links */}
          <div className="nav-links w-full fixed top-0 left-0 lg:static flex flex-row lg:flex-col justify-around lg:justify-center py-4 z-50 px-0 lg:gap-y-4 bg-[var(--bg-secondary)]/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none">
            <a
              href="#home"
              className={`group text-sm lg:text-base font-light uppercase tracking-wide text-shadow-sm relative ${
                activeSection === 'home'
                  ? 'text-[var(--c-accent)]'
                  : 'text-[var(--c-tertiary)]'
              }`}
              onClick={e => handleNavClick(e, 'home')}
            >
              About
              <span
                className={`absolute bottom-2 lg:bottom-0 left-0 w-12 lg:w-14 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
                  activeSection === 'home'
                    ? 'bg-[var(--c-accent)] scale-x-100'
                    : 'bg-[var(--c-tertiary)] scale-x-0'
                }`}
              ></span>
            </a>
            <a
              href="#projects"
              className={`group text-sm lg:text-base font-light uppercase tracking-wide text-shadow-sm relative ${
                activeSection === 'projects'
                  ? 'text-[var(--c-accent)]'
                  : 'text-[var(--c-tertiary)]'
              }`}
              onClick={e => handleNavClick(e, 'projects')}
            >
              Projects
              <span
                className={`absolute bottom-2 lg:bottom-0 left-0 w-19 lg:w-21 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
                  activeSection === 'projects'
                    ? 'bg-[var(--c-accent)] scale-x-100'
                    : 'bg-[var(--c-tertiary)] scale-x-0'
                }`}
              ></span>
            </a>
            <a
              href="#contact"
              className={`group text-sm lg:text-base font-light uppercase tracking-wide text-shadow-sm relative ${
                activeSection === 'contact'
                  ? 'text-[var(--c-accent)]'
                  : 'text-[var(--c-tertiary)]'
              }`}
              onClick={e => handleNavClick(e, 'contact')}
            >
              Contact
              <span
                className={`absolute bottom-2 lg:bottom-0 left-0 w-18 lg:w-20 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
                  activeSection === 'contact'
                    ? 'bg-[var(--c-accent)] scale-x-100'
                    : 'bg-[var(--c-tertiary)] scale-x-0'
                }`}
              ></span>
            </a>

            {/* Toggle Dark Mode for mobile */}
            <button
              onClick={toggleDarkMode}
              aria-label={
                darkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
              className={`lg:hidden items-center justify-between p-1 w-7 h-7 rounded-full text-[var(--c-primary)] bg-[var(--bg-compliment)] border-1 border-[var(--c-primary)] cursor-pointer`}
            >
              {darkMode ? (
                <i className="bx bx-sun text-md -translate-y-0.5" />
              ) : (
                <i className="bx bx-moon text-md -translate-y-0.5" />
              )}
            </button>
            {/* Toggle Dark Mode for desktop */}
            <button
              onClick={toggleDarkMode}
              aria-label={
                darkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
              className={`hidden lg:flex items-center justify-between px-2 relative w-13 h-7 rounded-full text-[var(--c-primary)]
            bg-[var(--bg-compliment)] cursor-pointer`}
            >
              <i className="bx bx-sun text-md" />
              <i className="bx bx-moon text-md" />
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300
              ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
              />
            </button>
          </div>
        </div>

        {/* SNS icons for desktop */}
        <div className="hidden lg:flex flex-row gap-8">
          {socialIcons.map((social, index) => (
            <a
              href={social.url}
              key={index}
              className={`text-xl xl:text-2xl 2xl:text-3xl text-[var(--c-primary)] hover:text-[var(--c-secondary)] ${
                isThemeChanging ? 'transition-none' : 'transition duration-300'
              }`}
              target="_blank"
              aria-label={social.label}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
