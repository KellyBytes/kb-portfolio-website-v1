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
      <p className="text-pretty font-light leading-5">
        As a former mechanical engineer and technical translator, I bring a
        unique perspective to web development, drawing on my diverse experiences
        across various industries. Now, as a passionate self-taught web
        developer, I specialize in creating accessible and interactive
        applications that enhance the digital landscape.
      </p>
      <p className="text-pretty font-light leading-5">
        My goal is to craft seamless digital experiences that balance
        functionality, efficiency, and aesthetics. Proficient in{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">HTML</span>,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">CSS</span>,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          JavaScript
        </span>
        ,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          TypeScript
        </span>
        , <span className="font-semibold text-[var(--c-tertiary)]">React</span>,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">Node.js</span>,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">Tailwind</span>
        , <span className="font-semibold text-[var(--c-tertiary)]">Figma</span>,
        and <span className="font-semibold text-[var(--c-tertiary)]">Git</span>,
        I develop fully responsive, interactive, and scalable applications
        tailored to meet the specific needs of my clients.
      </p>
      <p className="text-pretty font-light leading-5">
        With a strong focus on UI/UX design, I strive to ensure that every
        website or application I build is not only visually stunning but also
        intuitive and user friendly. My enthusiasm for learning keeps me ahead
        of the curve, as I continually explore emerging technologies and stay
        current with industry trends.
      </p>
      <p className="text-pretty font-light leading-5">
        For me, web development is more than just writing code; it's about
        creating meaningful digital experiences that resonate. Whether I’m
        designing a sleek landing page, developing a complex web application, or
        optimizing existing projects, I tackle every challenge with dedication,
        creativity, and precision. I am excited about the opportunity to
        contribute to innovative projects and help bring ideas to life.
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
