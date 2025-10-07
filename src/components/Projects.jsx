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
      className="scroll-mt-16 lg:scroll-mt-0 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl min-h-screen px-8 pt-6 pb-18 lg:py-18 sm:px-12 md:px-16 lg:pl-0 lg:pr-16 2xl:py-32 flex flex-col gap-y-4 justify-start items-center "
    >
      <h2 className="text-2xl font-light uppercase text-shadow-md">
        Recent Projects
      </h2>
      <div className="w-full">
        {projects.slice(0, visibleCount).map((project, projectIndex) => (
          <a
            key={projectIndex}
            className={`project w-full flex flex-col-reverse sm:flex-row mx-auto my-6 bg-[var(--bg-tertiary)] hover:bg-[var(--bg-primary)] rounded-md hover:ring hover:ring-[var(--c-compliment)]/20 hover:shadow-md hover:shadow-[var(--c-compliment)]/20 group ${
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
            href={project.url}
            target="_blank"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-48 sm:w-34 lg:w-30 object-contain self-center sm:self-start sm:pl-6 py-6 sm:mr-8 lg:mr-8"
            />
            <div className="flex flex-col py-4 px-4 lg:pl-0 lg:pr-4 gap-y-2">
              <h2
                className={`font-bold text-[var(--c-tertiary)] group-hover:text-[var(--c-accent)] text-shadow-sm ${
                  isThemeChanging
                    ? 'transition-none'
                    : 'transition duration-300'
                }`}
              >
                {project.title}
                <i
                  className={`bx bx-arrow-up-right-stroke text-2xl align-bottom group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200 ${
                    isThemeChanging
                      ? 'transition-none'
                      : 'transition duration-300'
                  }`}
                />
              </h2>
              <p className="font-light text-sm text-pretty max-h-28 overflow-y-auto custom-scrollbar pr-2">
                {project.description}
              </p>
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
            </div>
          </a>
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
