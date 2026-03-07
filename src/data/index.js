export const socialIcons = [
  {
    icon: 'fa-brands fa-github',
    url: 'https://github.com/KellyBytes',
    label: 'Visit my GitHub profile',
  },
  {
    icon: 'fa-brands fa-linkedin',
    url: 'https://www.linkedin.com/in/erikoiwashita/',
    label: 'Visit my LinkedIn profile',
  },
  {
    icon: 'fa-brands fa-codepen',
    url: 'https://codepen.io/KellyBytes',
    label: 'Visit my Codepen profile',
  },
  {
    icon: 'fa-brands fa-x-twitter',
    url: 'https://x.com/KellyBytesCA',
    label: 'Visit my X profile',
  },
];

export const projects = [
  {
    img: '/images/property-pulse.png',
    title: 'Real Estate Marketplace',
    description:
      'A full-stack real estate marketplace built with Next.js, React, and MongoDB. Users can browse listings, bookmark and share properties, and send inquiries to property owners, while owners manage listings and messages through a dashboard.',
    features: [
      'Property search',
      'Bookmarking',
      'Inquiry messaging',
      'Owner dashboard',
      'Map integration',
    ],
    tags: ['Next.js', 'React', 'Tailwind', 'MongoDB'],
    url: 'https://github.com/KellyBytes/property-pulse',
    demoUrl: 'https://property-pulse.kellybytes.dev',
  },

  {
    img: '/images/projecthub-api.png',
    title: 'RESTful API',
    description:
      'A RESTful API for managing team projects built with Node.js, Express, and MongoDB. Features JWT authentication, role-based access control, rate limiting, Swagger documentation, and automated testing with Jest and Supertest.',
    features: [
      'JWT authentication',
      'Role-based access control',
      'Rate limiting',
      'Swagger API docs',
      'Automated testing',
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'Swagger', 'Jest'],
    url: 'https://github.com/KellyBytes/projecthub-api-bnd',
    demoUrl: 'https://projecthub-api-bnd.onrender.com/api-docs',
  },

  {
    img: '/images/kellystore.png',
    title: 'E-commerce Web App',
    description:
      'A web shop for printable templates and icons built with Next.js and React. Users can browse products and simulate checkout using Stripe integration, demonstrating a typical e-commerce purchase flow.',
    features: [
      'Product catalog',
      'Stripe checkout flow',
      'Product pages',
      'Responsive storefront',
    ],
    tags: ['Next.js', 'React', 'Stripe', 'AWS amplify'],
    url: 'https://github.com/KellyBytes/kellystore',
    demoUrl: 'https://main.d3vz3aed5z659y.amplifyapp.com',
  },

  {
    img: '/images/thinkboard.png',
    title: 'Note Taking App',
    description:
      'A full-stack note-taking application built with the MERN stack. Authenticated users can create, edit, and organize notes with complete CRUD functionality and persistent database storage.',
    features: [
      'User authentication',
      'Note CRUD operations',
      'Persistent database storage',
    ],
    tags: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
    url: 'https://github.com/KellyBytes/mern-thinkboard',
    demoUrl: 'https://mern-thinkboard-51ns.onrender.com',
  },

  {
    img: '/images/bookworm.png',
    title: 'Reading Tracker App',
    description:
      'A reading tracker app powered by the Google Books API. Users can search for books, save them to a personal library, track reading progress, and add ratings and notes.',
    features: [
      'Google Books API search',
      'Personal library',
      'Reading progress tracking',
      'Ratings and notes',
    ],
    tags: ['React', 'Tailwind', 'GBooks API'],
    url: 'https://github.com/KellyBytes/bookworm',
    demoUrl: 'https://bookworm.kellybytes.dev',
  },

  {
    img: '/images/news-app.png',
    title: 'News App',
    description:
      'A dashboard-style web app that displays the latest news and weather using GNews and Weather APIs. Users can browse articles, view current weather conditions, and bookmark favorite stories.',
    features: [
      'News API integration',
      'Weather data display',
      'Article bookmarking',
      'Dashboard layout',
    ],
    tags: ['React', 'Tailwind', 'GNews API', 'Weather API'],
    url: 'https://github.com/KellyBytes/news-app',
    demoUrl: 'https://news-app.kellybytes.dev',
  },

  {
    img: '/images/subsy.png',
    title: 'Subscription Tracker App',
    description:
      'A subscription management app built with Next.js and Firebase. Users can add, edit, and track subscriptions while viewing analytics such as monthly costs, yearly spending, and top categories.',
    features: [
      'Subscription management',
      'Cost analytics',
      'Category insights',
      'Firebase authentication',
    ],
    tags: ['Next.js', 'React', 'Firebase'],
    url: 'https://github.com/KellyBytes/subsy',
    demoUrl: 'https://subsy.kellybytes.dev',
  },

  {
    img: '/images/moodiary.png',
    title: 'Mood Tracker App',
    description:
      'A daily mood tracking application built with Next.js and Firebase authentication. Users record moods using icons and view insights through a calendar history, streak tracking, and average mood statistics.',
    features: [
      'Daily mood logging',
      'Calendar visualization',
      'Streak tracking',
      'Mood statistics',
    ],
    tags: ['Next.js', 'React', 'Tailwind', 'Firebase'],
    url: 'https://github.com/KellyBytes/moodiary',
    demoUrl: 'https://moodiary.kellybytes.dev',
  },

  {
    img: '/images/caffiend.png',
    title: 'Caffeine Tracker App',
    description:
      'A caffeine tracking app where users log drinks by type, cost, and time. The app estimates caffeine levels in the body and provides consumption history, statistics, and light/dark mode support.',
    features: [
      'Drink logging',
      'Caffeine level estimation',
      'Consumption history',
      'Usage statistics',
    ],
    tags: ['React', 'JavaScript', 'Firebase'],
    url: 'https://github.com/KellyBytes/caffiend',
    demoUrl: 'https://caffiend.kellybytes.dev',
  },

  {
    img: '/images/copacetic.png',
    title: 'Word Learning App',
    description:
      'A spaced-repetition vocabulary learning app where users type words based on their meanings. The system highlights mistakes, optimizes review intervals, and tracks daily study streaks.',
    features: [
      'Spaced repetition system',
      'Typing-based learning',
      'Error highlighting',
      'Daily streak tracking',
    ],
    tags: ['React', 'JavaScript'],
    url: 'https://github.com/KellyBytes/copacetic',
    demoUrl: 'https://copacetic.kellybytes.dev',
  },

  {
    img: '/images/ai-chat-bot.png',
    title: 'AI Chatbot App',
    description:
      'A fully responsive, single-page web application powered by the OpenAI API. It allows users to interact with an AI model, manage multiple chat sessions, and save or delete conversations. The app includes light/dark theme support, formatted responses for readability, and smooth scrolling for an intuitive user experience.',
    features: [
      'OpenAI API integration',
      'Multi-session chat',
      'Conversation history',
      'Light/dark theme',
    ],
    tags: ['React', 'OpenAI API'],
    url: 'https://github.com/KellyBytes/ai-chat-bot',
    demoUrl: 'https://chatbot.kellybytes.dev',
  },

  {
    img: '/images/color-converter-app.png',
    title: 'Color Converter App',
    description:
      'A web app that converts HEX and RGB values in real time. Changing one updates the other and the background color. HEX codes are copyable with one click.',
    features: [
      'Real-time HEX/RGB conversion',
      'Live color preview',
      'One-click copy',
    ],
    tags: ['React', 'Tailwind'],
    url: 'https://github.com/KellyBytes/color-converter-app',
    demoUrl: 'https://kb-color-converter-app.netlify.app',
  },

  {
    img: '/images/todo-app.png',
    title: 'Todo App',
    description:
      'A task manager where users add, edit, and delete todos with or without due dates. Tasks can be filtered, sorted, color-coded by status, and viewed in light or dark mode.',
    features: [
      'Task CRUD operations',
      'Filtering and sorting',
      'Due date management',
      'Status color coding',
    ],
    tags: ['React'],
    url: 'https://github.com/KellyBytes/sj-todo-app',
    demoUrl: 'https://kb-todos-app.netlify.app',
  },

  {
    img: '/images/world-weather-app.png',
    title: 'World Weather App',
    description:
      'A simple weather app built with React, TypeScript, and the OpenWeatherMap API. Users can search any city to view current temperature and conditions, displayed with intuitive weather icons.',
    features: [
      'City search',
      'Weather API integration',
      'TypeScript implementation',
      'Weather icons',
    ],
    tags: ['React', 'TypeScript', 'Weather API'],
    url: 'https://github.com/KellyBytes/fra-weather-app-2',
    demoUrl: 'https://kb-world-weather-2.netlify.app',
  },

  {
    img: '/images/pokedex.png',
    title: 'Pokédex',
    description:
      'A Pokédex app where users can search Pokémon by ID or name. It displays each Pokémon’s type, stats like HP and Attack, and allows sorting Moves alphabetically in ascending or descending order.',
    features: [
      'Pokémon search',
      'Stats display',
      'Move sorting',
      'API data rendering',
    ],
    tags: ['React', 'PokeAPI'],
    url: 'https://github.com/KellyBytes/pokedex',
    demoUrl: 'https://kb-reactjs-pokedex.netlify.app',
  },

  {
    img: '/images/unit-converter.png',
    title: 'Unit Converter',
    description:
      'A Chrome extension unit converter that converts length, weight, temperature, and more. Users can right-click selected numbers or manually input values to instantly convert between different units.',
    features: [
      'Context menu conversion',
      'Manual input conversion',
      'Multiple unit types',
    ],
    tags: ['Chrome Extension'],
    url: 'https://github.com/KellyBytes/ce-unit-converter',
    demoUrl: '',
  },

  {
    img: '/images/shopping-cart-ui.png',
    title: 'Shopping Cart UI',
    description:
      'A online shopping site UI sample featuring a modern layout for browsing products. Designed to provide a seamless and visually appealing shopping experience across all devices.',
    features: [
      'Product grid layout',
      'Responsive design',
      'Modern storefront UI',
    ],
    tags: ['React', 'Tailwind'],
    url: 'https://github.com/KellyBytes/shopping-cart',
    demoUrl: 'https://kb-shopping-cart.netlify.app',
  },

  {
    img: '/images/faq-ui.png',
    title: 'FAQ UI',
    description:
      'A FAQ sample page where users can expand or collapse answers for each question. It also includes a light/dark mode toggle for better accessibility and user experience.',
    tags: ['React', 'Tailwind'],
    features: [
      'Accordion interaction',
      'Expand/collapse answers',
      'Light/dark theme',
    ],
    url: 'https://github.com/KellyBytes/faq-accordion',
    demoUrl: 'https://kb-faq-accordion.netlify.app',
  },

  {
    img: '/images/dark-light.png',
    title: 'Dark/Light Theme UI',
    description:
      'A product landing page sample featuring a light/dark mode toggle. Designed to showcase a product with a clean layout and adaptable design across all screen sizes.',
    features: ['Theme toggle', 'Responsive landing page layout'],
    tags: ['React', 'Tailwind'],
    url: 'https://github.com/KellyBytes/dark-light-toggle',
    demoUrl: 'https://kb-dark-light-toggle.netlify.app',
  },

  {
    img: '/images/quotes-app.png',
    title: 'Quotes App',
    description: 'A quotes app that shows famous quotes.',
    features: ['Quotes API integration', 'Random quote display'],
    tags: ['React', 'Quotes API'],
    url: 'https://github.com/KellyBytes/quotes-app',
    demoUrl: 'https://kb-quotes-app.netlify.app',
  },

  {
    img: '/images/calendar-app.png',
    title: 'Calendar App',
    description:
      'A simple, calendar app that lets users add events with specific times using a date picker. Designed for ease of scheduling and viewing across different devices.',
    features: ['Event creation', 'Date/time picker', 'Daily schedule view'],
    tags: ['React'],
    url: 'https://github.com/KellyBytes/calendar-app',
    demoUrl: 'https://kb-calendar-app.netlify.app',
  },
];
