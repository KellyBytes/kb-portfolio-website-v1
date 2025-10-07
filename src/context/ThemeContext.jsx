import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

const lightTheme = {
  '--bg-primary': '#f8fafc',
  '--bg-secondary': '#f1f5f9',
  '--bg-tertiary': '#e2e8f0',
  '--bg-accent': '#f5f5f4',
  '--bg-compliment': '#d1d5db',

  '--c-primary': '#475569',
  '--c-secondary': '#475569',
  '--c-tertiary': '#374151',

  '--c-accent': '#be123c',
  '--c-compliment': '#9ca3af',
  '--c-link': '#2563eb',
  '--c-link-transparent': 'rgba(37, 99, 235, 0.1)',
};

const darkTheme = {
  '--bg-primary': '#1f2937',
  '--bg-secondary': '#111827',
  '--bg-tertiary': '#030712',
  '--bg-accent': '#fef3c738',
  '--bg-compliment': '#4b5563',

  '--c-primary': '#94a3b8',
  '--c-secondary': '#cbd5e1',
  '--c-tertiary': '#e2e8f0',

  '--c-accent': '#fcd34d',
  '--c-compliment': '#9ca3af',
  '--c-link': '#60a5fa',
  '--c-link-transparent': 'rgba(37, 99, 235, 0.1)',
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('darkMode')) || false
  );
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  const toggleDarkMode = () => {
    setIsThemeChanging(true);
    setDarkMode((prev) => !prev);

    setTimeout(() => {
      setIsThemeChanging(false);
    }, 300);
  };

  useEffect(() => {
    const root = document.documentElement;
    const theme = darkMode ? darkTheme : lightTheme;

    darkMode ? root.classList.add('dark') : root.classList.remove('dark');

    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode, isThemeChanging }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
