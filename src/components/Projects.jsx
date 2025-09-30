import { useState, useEffect } from 'react';
import { skillCards, projects } from '../data/index';

const Projects = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const getPositionClass = (card) => {
    const width = window.innerWidth >= 1024;
    const position = width
      ? card.hoverPosition.large
      : card.hoverPosition.small;
    return position === 'bottom' ? 'bottom-0' : 'top-0';
  };

  const getHoverPositionClass = (card) => {
    const width = window.innerWidth >= 1024;
    const position = width
      ? card.hoverPosition.large
      : card.hoverPosition.small;
    return position === 'bottom' ? 'bottom-full' : 'top-full';
  };

  useEffect(() => {
    const checkScreen = () => {
      const large = window.innerWidth >= 1024;
      const hoverable = window.matchMedia('(hover: hover)').matches;
      setIsLargeScreen(large && hoverable);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div
      id="projects"
      className="max-w-xl min-h-screen px-4 py-18 flex flex-col gap-y-4 justify-center items-center "
    >
      <h2 className="text-2xl font-light uppercase mb-8 text-shadow-md">
        Recent Projects
      </h2>
      <div className="w-full">
        {projects.map((project, projectIndex) => (
          <div className="project w-full flex gap-4 mx-auto my-4 bg-[var(--bg-secondary)] hover:bg-[var(--bg-primary)] rounded-md hover:ring-1 hover:ring-[var(--c-compliment)]/20 hover:shadow-md hover:shadow-[var(--c-compliment)]/20 transition duration-500">
            <img
              src={project.img}
              alt={project.title}
              className="w-40 self-start p-4"
            />
            <div key={projectIndex} className="flex flex-col py-4 gap-y-2">
              <h2 className="font-bold text-[var(--c-accent)] text-shadow-sm">
                {project.title}
              </h2>
              <p className="font-light text-sm text-pretty">
                {project.description}
              </p>
              <div className="tags flex flex-wrap gap-x-1 gap-y-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="tag text-xs px-2 text-[var(--c-accent)]/60 bg-[var(--bg-accent)] border border-[var(--c-accent)]/60 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-[600px] lg:w-[850px] xl:w-[900px] grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-16 lg:mb-0 mb-16">
        {skillCards.map((card, index) => {
          const isOpen =
            (isLargeScreen && hoveredCardIndex === index) ||
            (!isLargeScreen && openIndex === index);

          const handleClick = () => {
            if (!isLargeScreen) {
              setOpenIndex(openIndex === index ? null : index);
            }
          };

          return (
            <div
              key={index}
              className={`lg:max-w-[280px] md:max-w-[400px] max-w-[320px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate ${
                isLargeScreen ? '' : 'cursor-pointer'
              }`}
              onMouseEnter={
                isLargeScreen ? () => setHoveredCardIndex(index) : undefined
              }
              onMouseLeave={
                isLargeScreen ? () => setHoveredCardIndex(null) : undefined
              }
              onClick={handleClick}
            >
              <div className="p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500">
                <i
                  className={`${card.icon} md:text-4xl text-3xl text-gray-900 dark:text-white transition-colors duration-500`}
                ></i>
                <h3 className="md:text-2xl text-xl font-bold my-4 text-red-500 dark:text-yellow-500 transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-gray-900 dark:text-white md:h-28 h-24 md:text-base text-sm font-light overflow-y-auto custom-scrollbar pr-2 transition-colors duration-500">
                  {card.description}
                </p>
              </div>
              <div
                className={`w-full absolute left-0 ${getPositionClass(
                  card
                )} flex flex-col gap-y-5 py-4 transition-all duration-300 ${
                  isOpen ? getHoverPositionClass(card) : 'hidden'
                }`}
              >
                {isLargeScreen && card.hoverPosition.large === 'top' && (
                  <div className="flex justify-between">
                    {[...Array(card.projectCount)].map((_, i) => (
                      <a
                        href="#"
                        key={i}
                        className="text-lg bg-red-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-white rounded-full transition-colors"
                      >
                        {i + 1}
                      </a>
                    ))}
                  </div>
                )}
                <h2 className="text-2xl text-center text-gray-900 dark:text-white font-light tracking-wide">
                  Projects
                </h2>
                {(!isLargeScreen ||
                  (isLargeScreen && card.hoverPosition.large === 'bottom')) && (
                  <div
                    className={`${isOpen ? 'flex' : 'hidden'} justify-between`}
                  >
                    {[...Array(card.projectCount)].map((_, i) => (
                      <a
                        href="#"
                        key={i}
                        className="text-lg bg-red-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-white rounded-full transition-colors"
                      >
                        {i + 1}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
