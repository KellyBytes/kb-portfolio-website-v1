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
      className={`w-full md:w-[45%] h-18 sm:max-h-14 md:min-h-full
              flex flex-col justify-center items-center
              md:justify-between md:items-start
              px-4 sm:px-6 md:px-16 py-18
              fixed top-0 xl:left-32 2xl:left-52 z-50 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } transition-opacity ease-in duration-1500`}
    >
      <div className="flex flex-col items-start w-full gap-y-4 sm:gap-x-4 gap-x-2">
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
        <p className="md:w-64 lg:w-96 text-wrap text-shadow-sm font-light">
          I build accessible, interactive applications and experiences on the
          web.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <a
          href="#home"
          className={`group inline-block text-sm lg:text-base font-light uppercase mr-8 md:mr-19 tracking-wide text-shadow-sm relative ${
            activeSection === 'home'
              ? 'text-[var(--c-accent)]'
              : 'text-[var(--c-tertiary)]'
          }`}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          About
          <span
            className={`absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
              activeSection === 'home'
                ? 'bg-[var(--c-accent)] scale-x-100'
                : 'bg-[var(--c-tertiary)] scale-x-0'
            }`}
          ></span>
        </a>
        <a
          href="#projects"
          className={`group text-sm lg:text-base font-light uppercase mr-8 md:mr-12 tracking-wide text-shadow-sm relative ${
            activeSection === 'projects'
              ? 'text-[var(--c-accent)]'
              : 'text-[var(--c-tertiary)]'
          }`}
          onClick={(e) => handleNavClick(e, 'projects')}
        >
          Projects
          <span
            className={`absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
              activeSection === 'projects'
                ? 'bg-[var(--c-accent)] scale-x-100'
                : 'bg-[var(--c-tertiary)] scale-x-0'
            }`}
          ></span>
        </a>
        <a
          href="#contact"
          className={`group text-sm lg:text-base font-light uppercase mr-9 md:mr-14 tracking-wide text-shadow-sm relative ${
            activeSection === 'contact'
              ? 'text-[var(--c-accent)]'
              : 'text-[var(--c-tertiary)]'
          }`}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
          <span
            className={`absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ${
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
      <div className="flex flex-row gap-1 md:gap-8">
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
