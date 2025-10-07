import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { socialIcons } from '../data';

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
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
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return; // when scrolling by clicking the links

      const sections = ['home', 'projects', 'contact'];
      sections.forEach((sectionId) => {
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
        className={`w-full lg:w-[45%] xl:w-[calc(45%-4rem)] 2xl:w-[calc(45%-8rem)] h-40 md:h-42 lg:min-h-full xl:min-h-[90vh] lg:fixed lg:top-0 xl:left-16 2xl:left-32 bg-[var(--bg-secondary)]/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-0 z-50 flex flex-col justify-start lg:justify-between lg:items-start px-8 sm:px-12 md:px-16 xl:pl-16 xl:pr-0 2xl:pl-32 pt-10 pb-0 lg:py-18 2xl:py-32 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition-opacity ease-in duration-1500`}
      >
        <div className="flex flex-col h-42 justify-between lg:gap-y-4">
          <div className="flex flex-col items-start w-full gap-y-1 lg:gap-y-4">
            <a
              href="#"
              className="text-[var(--c-tertiary)] font-bold text-3xl sm:text-4xl md:text-5xl text-shadow-lg"
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Eriko Iwashita
            </a>
            <h2 className="text-[var(--c-secondary)] font-medium text-shadow-md">
              Front End Developer
            </h2>
            <p className="hidden lg:block lg:w-80 text-wrap text-shadow-sm font-light">
              I build accessible, interactive applications and experiences on
              the web.
            </p>
          </div>

          {/* Toggle Dark Mode for mobile */}
          <button
            onClick={toggleDarkMode}
            className={`lg:hidden fixed top-10 right-10 sm:right-14 items-center justify-between p-1 w-7 h-7 rounded-full text-[var(--c-primary)]
            bg-[var(--bg-compliment)] border-2 border-[var(--c-primary)] cursor-pointer`}
          >
            {darkMode ? (
              <i className="bx bx-sun text-md -translate-y-0.5" />
            ) : (
              <i className="bx bx-moon text-md -translate-y-0.5" />
            )}
          </button>

          {/* SNS icons for mobile */}
          <div className="lg:hidden flex flex-row gap-x-4">
            {socialIcons.map((social, index) => (
              <a
                href={social.url}
                key={index}
                className="text-lg md:text-2xl xl:text-3xl text-[var(--c-primary)] hover:text-[var(--c-secondary)] transition-colors duration-300"
                target="_blank"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Navigation links for desktop */}
          <div className="hidden lg:flex flex-col justify-center gap-y-4 mt-8">
            <a
              href="#home"
              className={`group text-sm lg:text-base font-light uppercase tracking-wide text-shadow-sm relative ${
                activeSection === 'home'
                  ? 'text-[var(--c-accent)]'
                  : 'text-[var(--c-tertiary)]'
              }`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              About
              <span
                className={`absolute bottom-0 left-0 w-12 lg:w-14 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
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
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
              <span
                className={`absolute bottom-0 left-0 w-19 lg:w-21 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
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
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 w-18 lg:w-20 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
                  activeSection === 'contact'
                    ? 'bg-[var(--c-accent)] scale-x-100'
                    : 'bg-[var(--c-tertiary)] scale-x-0'
                }`}
              ></span>
            </a>

            {/* Toggle Dark Mode for desktop */}
            <button
              onClick={toggleDarkMode}
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
              className="text-lg xl:text-3xl text-[var(--c-primary)] hover:text-[var(--c-secondary)] transition-colors duration-300"
              target="_blank"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Navigation links for mobile */}
      <div
        className={`lg:hidden sticky top-0 w-full flex flex-row justify-around py-6 bg-[var(--bg-secondary)]/80 backdrop-blur-md ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition-opacity ease-in duration-1500`}
      >
        <a
          href="#home"
          className={`group text-sm lg:text-base font-light uppercase tracking-wide text-shadow-sm relative ${
            activeSection === 'home'
              ? 'text-[var(--c-accent)]'
              : 'text-[var(--c-tertiary)]'
          }`}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          About
          <span
            className={`absolute bottom-0 left-0 w-12 lg:w-14 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
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
          onClick={(e) => handleNavClick(e, 'projects')}
        >
          Projects
          <span
            className={`absolute bottom-0 left-0 w-19 lg:w-21 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
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
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
          <span
            className={`absolute bottom-0 left-0 w-18 lg:w-20 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
              activeSection === 'contact'
                ? 'bg-[var(--c-accent)] scale-x-100'
                : 'bg-[var(--c-tertiary)] scale-x-0'
            }`}
          ></span>
        </a>
      </div>
    </>
  );
};

export default NavBar;
