export const socialIcons = [
  { icon: 'fa-brands fa-github', url: 'https://github.com/KellyBytes' },
  { icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/' },
  { icon: 'fa-brands fa-codepen', url: 'https://codepen.io/KellyBytes' },
  { icon: 'fa-brands fa-x-twitter', url: 'https://x.com/KellyBytesCA' },
];

export const aboutText = `
As a former mechanical engineer and technical translator, I bring a unique perspective to web development, drawing on my diverse experiences across various industries. Now, as a passionate web developer, I specialize in creating accessible and interactive applications that enhance the digital landscape.

My goal is to craft seamless digital experiences that balance functionality, efficiency, and aesthetics. Proficient in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, Git, and Figma, I develop fully responsive, interactive, and scalable applications tailored to meet the specific needs of my clients.

With a strong focus on UI/UX design, I strive to ensure that every website or application I build is not only visually stunning but also intuitive and user
friendly. My enthusiasm for learning keeps me ahead of the curve, as I continually explore emerging technologies and stay current with industry trends.

For me, web development is more than just writing code; it's about creating meaningful digital experiences that resonate. Whether I’m designing a sleek landing page, developing a complex web application, or optimizing existing projects, I tackle every challenge with dedication, creativity, and precision. I am excited about the opportunity to contribute to innovative projects and help bring ideas to life.
`;

export const projects = [
  {
    img: '/images/news-app.png',
    title: 'News App',
    description:
      'A dashboard-style web application that displays the latest news, current weather, and a calendar. It fetches top headlines and category-based articles from the GNews API. Users can bookmark their favorite articles to easily revisit them later.',
    tags: ['React', 'Tailwind CSS', 'GNews API', 'OpenWeatherMap API'],
  },
  {
    img: '/images/ai-chat-bot.png',
    title: 'AI Chat Bot',
    description:
      'A responsive chat application powered by the OpenAI API. It automatically saves chat history, with options to delete conversations if desired. Responses are neatly formatted for readability. The app supports both light and dark modes for a better user experience across devices.',
    tags: ['React', 'OpenAI API'],
  },
  {
    img: '/images/caffiend.png',
    title: 'Caffeine Tracker',
    description:
      'A responsive web app for tracking caffeine intake. Users can log drinks by type, cost, and time consumed, while the app calculates estimated caffeine remaining in the body and displays an index (low, moderate, high). The Stats section highlights the top three most consumed drinks, and the History section shows drink details, elapsed time, and caffeine levels on hover or click. Supports light/dark mode and manages users and data with Firebase.',
    tags: ['React', 'Firebase'],
  },
  {
    img: '/images/copacetic.png',
    title: 'Word Learning App',
    description:
      "A vocabulary learning app based on spaced-repetition theory. Users are shown a word's meaning and type the correct word to reinforce memory. A block-based input system indicates the number of letters, highlighting incorrect characters in red. Words are repeated at optimal intervals to enhance long-term retention. The app also encourages daily practice with a streak system that resets every 24 hours.",
    tags: ['React'],
  },
  {
    img: '/images/color-converter-app.png',
    title: 'Color Converter App',
    description:
      'A web app that converts between HEX and RGB color values. Adjusting RGB numbers or sliders instantly updates the HEX value, while modifying the HEX input updates the RGB values and slider positions. The background color changes according to the selected values, and HEX codes can be copied with a single click.',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    img: '/images/todo-app.png',
    title: 'Todo App',
    description:
      'A responsive task management app that lets users add, edit, and delete todos with or without due dates. Tasks can be marked as Open or Done, and filtered by All, Open, or Complete. Sorting is available by date or no date. Due dates are color-coded: gray for upcoming, green for today, and red for overdue. The app also supports light/dark mode for a better user experience.',
    tags: ['React'],
  },
  {
    img: '/images/calendar-app.png',
    title: 'Calendar App',
    description: '',
    tags: ['React'],
  },
  {
    img: '/images/weather-app.png',
    title: 'World Weather App',
    description: '',
    tags: ['React', 'TypeScript', 'OpenWeatherMap API'],
  },
  {
    img: '/images/pokedex.png',
    title: 'Pokédex',
    description: '',
    tags: ['React', 'PokeAPI'],
  },
  {
    img: '/images/unit-converter.png',
    title: 'Unit Converter',
    description: '',
    tags: ['Chrome Extension'],
  },
  {
    img: '/images/faq-ui.png',
    title: 'FAQ UI',
    description: '',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    img: '/images/dark-light.png',
    title: 'Dark/Light Theme UI',
    description: '',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    img: '/images/shopping-cart-ui.png',
    title: 'Shopping Cart UI',
    description: '',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    img: '/images/quotes-app.png',
    title: 'Quotes App',
    description: '',
    tags: ['React', 'Quotes API'],
  },
];

export const skillCards = [
  {
    icon: 'bx bx-pen',
    title: 'Design',
    description:
      'Design is all about creating visually appealing and user-friendly interfaces. I specialize in UI/UX design, ensuring every project balances aesthetics with functionality. Using tools like Figma and Adobe XD, I craft intuitive layouts that enhance user experience. From wireframes to high-fidelity prototypes, I focus on clean, minimal, and modern designs tailored for web and mobile applications.',
    projectCount: 3,
    hoverPosition: {
      large: 'bottom',
      small: 'bottom',
    },
  },
  {
    icon: 'bx bx-camera',
    title: 'Photography',
    description:
      'Photography is an essential part of digital content creation, capturing high-quality visuals that enhance branding and storytelling. I have experience in portrait, landscape, and product photography, ensuring every image is edited and optimized for the web. Understanding lighting, composition, and post-processing allows me to create compelling images that elevate visual communication across various platforms.',
    projectCount: 4,
    hoverPosition: {
      large: 'bottom',
      small: 'bottom',
    },
  },
  {
    icon: 'bx bxs-file-doc',
    title: 'Front-End Dev',
    description:
      'Front-end development is about bringing designs to life through clean and efficient code. I specialize in HTML, CSS, and JavaScript, along with frameworks like React to build dynamic and interactive web applications. My focus is on performance, accessibility, and responsiveness, ensuring that every website functions flawlessly across all devices and screen sizes.',
    projectCount: 4,
    hoverPosition: {
      large: 'bottom',
      small: 'bottom',
    },
  },
  {
    icon: 'bx bxs-devices',
    title: 'RWD',
    description:
      "In today's digital world, ensuring a seamless user experience across all devices is crucial. I implement responsive design techniques using modern CSS frameworks like Tailwind CSS and Bootstrap. By employing fluid grids, flexible layouts, and media queries, I create web pages that look great and function perfectly on desktops, tablets, and smartphones.",
    projectCount: 3,
    hoverPosition: {
      large: 'top',
      small: 'bottom',
    },
  },
  {
    icon: 'bx bx-data',
    title: 'Back-End Dev',
    description:
      'Back-end development powers the functionality behind web applications. I work with Node.js and databases like MongoDB and PostgreSQL to build secure and scalable server-side applications. Whether handling authentication, managing API requests, or optimizing database queries, I ensure data is processed efficiently and securely to support seamless front-end interactions.',
    projectCount: 3,
    hoverPosition: {
      large: 'top',
      small: 'bottom',
    },
  },
  {
    icon: 'bx bxl-github',
    title: 'Git Version Control',
    description:
      'Version control is essential for modern web development, and Git is my go-to tool for managing code efficiently. I use GitHub for collaboration, handling pull requests, merging branches, and tracking project changes. Whether working solo or in a team, I ensure code is well-documented, structured, and easily maintainable through proper versioning practices.',
    projectCount: 3,
    hoverPosition: {
      large: 'top',
      small: 'bottom',
    },
  },
];
