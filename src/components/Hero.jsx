import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isThemeChanging } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="home"
      className={`scroll-mt-80 lg:scroll-mt-0 w-full h-fit lg:min-h-screen px-2 pt-4 sm:pt-6 pb-18 md:pb-40 lg:pl-16 lg:pr-0 xl:pl-12 2xl:pl-20 lg:pt-18 lg:pb-0 flex flex-col gap-y-4 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1500`}
    >
      <p className="text-pretty font-light leading-snug">
        I'm a self-taught front-end developer focused on building accessible,
        interactive, and responsive web applications. With a background in
        mechanical engineering and technical translation, I bring an analytical
        and detail-oriented perspective to design and problem-solving in web
        development.
      </p>
      <p className="text-pretty font-light leading-snug">
        I enjoy creating user-centered interfaces, adding new features, and
        improving existing projects through debugging, refinement, and
        accessibility-focused enhancements. My goal is to build applications
        that feel intuitive, efficient, and pleasant to use.
      </p>
      <p className="text-pretty font-light leading-snug">
        I work with modern web technologies including{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          JavaScript
        </span>
        ,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          TypeScript
        </span>
        , <span className="font-semibold text-[var(--c-tertiary)]">React</span>,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">Next.js</span>,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Tailwind CSS
        </span>
        ,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">Node.js</span>,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Git/GitHub
        </span>
        , and{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">Figma</span>.
        While my primary focus is front-end development, I'm currently expanding
        into full-stack development to better understand end-to-end workflows
        and deliver more complete solutions.
      </p>

      <p className="text-pretty font-light leading-snug">
        As a quick learner and adaptable self-starter, I thrive in environments
        that value thoughtful UX, clean code, and continuous improvement. For
        me, web development is about turning ideas into user-friendly digital
        experiences that solve real problems and feel good to interact with.
      </p>

      <a
        href="/resume.pdf"
        className={`resume text-[var(--c-accent)] mt-4 text-shadow-sm hover:opacity-80 ${
          isThemeChanging ? 'transition-none' : 'transition duration-300'
        }`}
        target="_blank"
      >
        View Full Résumé{' '}
        <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
    </div>
  );
};

export default Hero;
