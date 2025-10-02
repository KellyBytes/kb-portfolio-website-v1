import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="home"
      className={`w-full lg:max-w-xl min-h-screen px-8 py-18 flex flex-col gap-y-4 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1500`}
    >
      <p className="text-pretty font-light leading-5">
        As a former mechanical engineer and technical translator, I bring a
        unique perspective to web development, drawing on my diverse experiences
        across various industries. Now, as a passionate web developer, I
        specialize in creating accessible and interactive applications that
        enhance the digital landscape.
      </p>
      <p className="text-pretty font-light leading-5">
        My goal is to craft seamless digital experiences that balance
        functionality, efficiency, and aesthetics. Proficient in{' '}
        <span className="font-bold">HTML</span>,{' '}
        <span className="font-bold">CSS</span>,{' '}
        <span className="font-bold">JavaScript</span>,{' '}
        <span className="font-bold">TypeScript</span>,{' '}
        <span className="font-bold">React</span>,{' '}
        <span className="font-bold">Node.js</span>,{' '}
        <span className="font-bold">Tailwind</span>,{' '}
        <span className="font-bold">Git</span>, and{' '}
        <span className="font-bold">Figma</span>, I develop fully responsive,
        interactive, and scalable applications tailored to meet the specific
        needs of my clients.
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
        href="#"
        className="resume text-[var(--c-accent)] mt-4 text-shadow-sm hover:opacity-80 transition duration-300"
      >
        View Full Résumé{' '}
        <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
    </div>
  );
};

export default Hero;
