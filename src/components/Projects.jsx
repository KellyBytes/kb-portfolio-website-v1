import { useState } from 'react';
import { projects } from '../data/index';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isThemeChanging } = useTheme();
  const [visibleCount, setVisibleCount] = useState(3);
  const [animatingIndexes, setAnimatingIndexes] = useState([]);

  const handleLoadMore = () => {
    const nextCount = visibleCount + 3;
    const newIndexes = projects.map((_, i) => i).slice(visibleCount, nextCount);
    setVisibleCount(nextCount);

    setAnimatingIndexes(newIndexes);

    setTimeout(() => {
      setAnimatingIndexes([]);
    }, 600);
  };

  return (
    <div
      id="projects"
      className="scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-0 w-full h-fit lg:min-h-screen px-2 pt-4 sm:pt-6 pb-18 md:pb-40 lg:pl-16 lg:pr-0 xl:pl-12 2xl:pl-0 lg:pt-18 lg:pb-0 flex flex-col gap-y-4 justify-start items-center "
    >
      <h2 className="text-2xl font-light uppercase text-shadow-md">
        Recent Projects
      </h2>
      <div className="w-full">
        {projects.slice(0, visibleCount).map((project, projectIndex) => (
          <div
            key={projectIndex}
            className={`project w-full sm:h-48 flex flex-col-reverse sm:flex-row justify-between gap-x-4 my-6 bg-[var(--bg-tertiary)] hover:bg-[var(--bg-primary)] rounded-md hover:ring hover:ring-[var(--c-compliment)]/20 hover:shadow-md hover:shadow-[var(--c-compliment)]/20 group ${
              isThemeChanging ? 'transition-none' : 'transition duration-300'
            }
            transition-all ease-out
          ${
            animatingIndexes.includes(projectIndex)
              ? 'opacity-0 animate-fade-in'
              : 'opacity-100'
          }`}
            style={
              animatingIndexes.includes(projectIndex)
                ? { animationDelay: `${(projectIndex % 4) * 100}ms` }
                : {}
            }
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-[16rem] sm:w-[12rem] md:w-[14rem] lg:w-[12rem] xl:w-[14rem] h-full aspect-[3/2] object-cover mx-auto sm:pl-6 sm:pr-0 my-6 py-0 sm:my-0 sm:py-6"
            />
            <div className="w-full flex flex-col py-4 px-4 gap-y-2">
              <h2
                className={`flex justify-between font-bold text-[var(--c-tertiary)] group-hover:text-[var(--c-accent)] text-shadow-sm ${
                  isThemeChanging
                    ? 'transition-none'
                    : 'transition duration-300'
                }`}
              >
                {project.title}
                <div className="links flex gap-3">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank">
                      Live
                      <i
                        className={`bx bx-arrow-up-right-stroke text-2xl align-bottom hover:translate-x-1 hover:-translate-y-1 transition duration-200 text-[var(--c-tertiary)] group-hover:text-[var(--c-accent)] ${
                          isThemeChanging
                            ? 'transition-none'
                            : 'transition duration-300'
                        }`}
                      />
                    </a>
                  )}
                  <a href={project.url} target="_blank">
                    GitHub
                    <i
                      className={`bx bx-arrow-up-right-stroke text-2xl align-bottom hover:translate-x-1 hover:-translate-y-1 transition duration-200 text-[var(--c-tertiary)] group-hover:text-[var(--c-accent)] ${
                        isThemeChanging
                          ? 'transition-none'
                          : 'transition duration-300'
                      }`}
                    />
                  </a>
                </div>
              </h2>
              <div className="tags flex flex-wrap gap-x-1 gap-y-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="tag text-xs px-2 py-1 text-[var(--c-accent)]/80 bg-[var(--bg-accent)] rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                className="text-sm text-pretty max-h-28 overflow-y-auto custom-scrollbar pr-2"
                tabIndex={0}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
        {visibleCount < projects.length && (
          <div className="text-center mt-8">
            <button
              className={`px-6 py-1 custom-btn ${
                isThemeChanging ? 'transition-none' : 'transition duration-300'
              }`}
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
