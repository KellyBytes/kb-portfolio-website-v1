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
    <div
      className={`w-full lg:w-[45%] h-56 lg:min-h-full xl:min-h-[90vh] flex flex-col justify-start lg:justify-between lg:items-start px-8 lg:px-16 2xl:px-32 py-10 lg:py-18 fixed top-0 xl:left-16 2xl:left-32 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity ease-in duration-1500`}
    >
      <div className="flex flex-col gap-y-4 lg:gap-y-4">
        <div className="flex flex-col items-start w-full gap-y-2 lg:gap-y-4">
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
            I build accessible, interactive applications and experiences on the
            web.
          </p>
        </div>
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
        <div className="flex flex-row justify-center lg:flex-col gap-x-8 lg:gap-y-4 mt-2 lg:mt-8">
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
              className={`absolute bottom-0 left-0 w-14 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
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
              className={`absolute bottom-0 left-0 w-21 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
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
              className={`absolute bottom-0 left-0 w-20 h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
                activeSection === 'contact'
                  ? 'bg-[var(--c-accent)] scale-x-100'
                  : 'bg-[var(--c-tertiary)] scale-x-0'
              }`}
            ></span>
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`relative w-13 h-7 rounded-full flex items-center justify-between px-2 text-[var(--c-primary)]
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
      </div>
      <div className="hidden lg:flex flex-row gap-1 lg:gap-8">
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
    </div>
  );
};

export default NavBar;
