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
        I'm a self-taught developer transitioning from front-end to full-stack
        development, passionate about building accessible, interactive, and
        scalable web applications. With a background in mechanical engineering
        and technical translation, I bring analytical thinking, precision, and
        strong problem-solving skills to software development.
      </p>

      <p className="text-pretty font-light leading-snug">
        On the front end, I build responsive and intuitive user interfaces using{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          JavaScript, TypeScript, React, Next.js, and Tailwind CSS,
        </span>{' '}
        and design user experiences with{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">Figma.</span>
      </p>

      <p className="text-pretty font-light leading-snug">
        On the back end, I develop APIs and full-stack applications with{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Node.js, Express, and MongoDB,
        </span>{' '}
        and deploy applications using modern cloud platforms such as{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Vercel, Firebase, and Render.
        </span>{' '}
        I have experience integrating authentication systems, managing
        databases, and connecting third-party services including{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Stripe and Google APIs.
        </span>
      </p>

      <p className="text-pretty font-light leading-snug">
        I enjoy improving performance, refactoring code, and designing systems
        that are both user-friendly and maintainable. My goal is to continue
        growing as a full-stack developer while contributing to meaningful,
        well-crafted digital products.
      </p>

      <p className="text-pretty font-light leading-snug">
        I am currently seeking a junior front-end or full-stack developer
        position where I can continue learning, contribute to real-world
        projects, and grow within a collaborative team environment.
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
