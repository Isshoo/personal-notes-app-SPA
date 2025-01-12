import { useState, useEffect, useCallback } from 'react';

function useLocale(initialLocale = 'EN') {
  const [locale, setLocale] = useState(() => localStorage.getItem('locale') || initialLocale);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((prevLocale) => (prevLocale === 'EN' ? 'ID' : 'EN'));
  }, []);

  return [locale, toggleLocale];
}

export default useLocale;
