import { useEffect, useState } from 'react';

const THEME_ATTRIBUTE = 'data-theme';
const DARK = 'dark';
const LIGHT = 'light';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, isDark ? DARK : LIGHT);
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setIsDark(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
}

