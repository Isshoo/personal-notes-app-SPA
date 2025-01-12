import { useState, useEffect, useCallback } from 'react';

function useTheme(initialTheme = 'dark') {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  return [theme, toggleTheme];
}

export default useTheme;
