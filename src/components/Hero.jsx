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
        I am a self-taught front-end developer focused on building accessible,
        interactive, and responsive applications. My background in mechanical
        engineering and technical translation gives me a unique perspective on
        problem-solving and design in web development. I am deeply interested in
        improving <i>accessibility</i>, adding <i>new features</i>, and
        continuously refining existing projects through <i>debugging</i> and{' '}
        <i>optimization</i>.
      </p>
      <p className="text-pretty font-light leading-snug">
        I aim to craft seamless digital experiences that balance functionality,
        efficiency, and aesthetics. Skilled in{' '}
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
        <span className="font-semibold text-[var(--c-tertiary)]">Next.js</span>,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">Node.js</span>,{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">Tailwind</span>
        , <span className="font-semibold text-[var(--c-tertiary)]">Figma</span>,
        and{' '}
        <span className="font-semibold text-[var(--c-tertiary)]">
          Git/GitHub
        </span>
        , I build applications that are not only visually appealing but also
        intuitive and user-friendly. While my core focus is front-end
        development, I am actively expanding into full-stack development to
        better understand end-to-end workflows and deliver more robust, scalable
        solutions.
      </p>
      <p className="text-pretty font-light leading-snug">
        As a quick learner and adaptable self-starter, I thrive in environments
        where continuous improvement and problem-solving are essential. With a
        strong focus on UI/UX and accessibility, I ensure every project I work
        on meets the specific needs of its users.
      </p>
      <p className="text-pretty font-light leading-snug">
        For me, web development is more than writing code—it’s about creating
        meaningful digital experiences that resonate. Whether designing a sleek
        landing page, developing a complex web application, or enhancing and
        optimizing existing solutions, I approach each challenge with
        creativity, precision, and dedication. I am passionate about turning
        innovative ideas into functional, impactful digital experiences.
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
