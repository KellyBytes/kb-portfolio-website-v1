import { useEffect, useState } from 'react';
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
      className={`scroll-mt-80 lg:scroll-mt-0 w-full h-fit lg:min-h-screen px-2 pt-4 sm:pt-6 pb-18 md:pb-40 lg:pl-12 lg:pr-0 xl:pl-10 2xl:pl-8 lg:pt-18 lg:pb-0 flex flex-col gap-y-4 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1500`}
    >
      <p className="text-pretty font-light leading-snug">
        Full-stack developer with a background in mechanical engineering and
        technical translation. I bring an analytical, detail-oriented approach
        to building software, shaped by that earlier work.
      </p>

      <p className="text-pretty font-light leading-snug">
        I've built and deployed 30+ projects, including full-stack platforms,
        RESTful APIs, and Stripe-integrated e-commerce apps, most covering
        authentication, database integration, and third-party service
        connections. The more recent ones I keep maintaining and extending
        instead of moving on once they ship.
      </p>

      <p className="text-pretty font-light leading-snug">
        My latest project,{' '}
        <a
          href="https://notes.kellybytes.dev"
          target="_blank"
          className={`font-semibold text-[var(--c-tertiary)] underline underline-offset-2 decoration-1 hover:opacity-80 ${
            isThemeChanging ? 'transition-none' : 'transition duration-300'
          }`}
        >
          Kelly's Notes
        </a>
        , is a content platform built on Next.js and Contentful. I also built
        the workflow that fills it: Claude Code skills that draft articles
        against a version-controlled template, verify them by executing the code
        they contain, and refuse to write when two articles disagree. Getting
        the pipeline to hand decisions back instead of guessing took more work
        than the rest of the project, and I think it mattered more too.
      </p>

      <p className="text-pretty font-light leading-snug">
        On the front end, I build responsive, accessible interfaces with{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          JavaScript, TypeScript, React, Next.js, and Tailwind CSS.
        </span>{' '}
        On the back end, I work with{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Node.js, Express, Prisma, PostgreSQL, and MongoDB,
        </span>{' '}
        plus headless CMS platforms like{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Contentful,
        </span>{' '}
        and deploy on{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Vercel, Firebase, and Render.
        </span>
      </p>

      <p className="text-pretty font-light leading-snug">
        I like refactoring code, improving performance, and building the tooling
        around my own workflow — Claude Code is part of that now, automating
        pieces of it. Currently looking for front-end or full-stack developer
        roles in Edmonton, AB, or remote within Canada.
      </p>

      <div className="flex justify-start gap-8 mt-4">
        <a
          href="/eriko_iwashita_frontend_fullstack_resume.pdf"
          className={`resume text-[var(--c-accent)] mt-4 text-shadow-sm hover:opacity-80 ${
            isThemeChanging ? 'transition-none' : 'transition duration-300'
          }`}
          target="_blank"
        >
          View Resume <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
        <a
          href="/eriko_iwashita_frontend_fullstack_resume.pdf"
          className={`resume text-[var(--c-accent)] mt-4 text-shadow-sm hover:opacity-80 ${
            isThemeChanging ? 'transition-none' : 'transition duration-300'
          }`}
          download
        >
          Download Resume (PDF){' '}
          <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
