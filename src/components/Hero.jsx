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
      className={`scroll-mt-80 lg:scroll-mt-0 w-full h-fit lg:min-h-screen px-2 pt-4 sm:pt-6 pb-18 md:pb-40 lg:pl-12 lg:pr-0 xl:pl-10 2xl:pl-8 lg:pt-18 lg:pb-0 flex flex-col gap-y-4 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1500`}
    >
      <p className="text-pretty font-light leading-snug">
        Full-stack developer with a background in mechanical engineering and
        technical translation, bringing analytical thinking, attention to
        detail, and a systems-level approach to software development.
      </p>

      <p className="text-pretty font-light leading-snug">
        I have built and deployed 30+ projects — including full-stack platforms,
        RESTful APIs, and Stripe-integrated e-commerce applications — focused on
        real-world features such as authentication, database integration, and
        third-party service connectivity.
      </p>

      <p className="text-pretty font-light leading-snug">
        On the front end, I build responsive, accessible interfaces using{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          JavaScript, TypeScript, React, Next.js, and Tailwind CSS.
        </span>{' '}
        On the back end, I develop APIs and full-stack applications with{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Node.js, Express, Prisma, PostgreSQL, and MongoDB,
        </span>{' '}
        and deploy with{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Vercel, Firebase, and Render.
        </span>
      </p>

      <p className="text-pretty font-light leading-snug">
        I enjoy refactoring code, improving performance, and designing systems
        that are both user-friendly and production-ready. Currently seeking
        front-end or full-stack developer roles in Edmonton, AB, or remote
        within Canada.
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
