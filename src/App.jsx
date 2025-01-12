import React, { useState, useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivedNotesPage from './pages/ArchivedNotesPage';
import AddNotesPage from './pages/AddNotesPage';
import DetailNotesPage from './pages/DetailNotesPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';
import useLocale from './hooks/useLocale';
import useTheme from './hooks/useTheme';
import HeaderBar from './components/Base/HeaderBar';
import FooterBar from './components/Base/FooterBar';
import LoadingBar from './components/Base/LoadingBar';
import NavigationBar from './components/Base/NavigationBar';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, toggleTheme] = useTheme();
  const [locale, toggleLocale] = useLocale();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setInitializing(false);
      }
    }

    fetchUserData();
  }, []);

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme, toggleTheme]);

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale, toggleLocale]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  async function onLogoutHandler() {
    setAuthedUser(null);
    putAccessToken('');
  }

  if (initializing) {
    return null;
  }
  if (!authedUser) {
    return (
      <LocaleProvider value={localeContextValue}>
        <ThemeProvider value={themeContextValue}>
          <div
            className="container"
            data-theme={theme === 'dark' ? '' : 'light'}
            data-lang={locale === 'EN' ? '' : 'ID'}
          >
            <header>
              <HeaderBar />
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
            <footer>
              <FooterBar />
            </footer>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
  return (
    <LocaleProvider value={localeContextValue}>
      <ThemeProvider value={themeContextValue}>
        <div
          className="container"
          data-theme={theme === 'dark' ? '' : 'light'}
          data-lang={locale === 'EN' ? '' : 'ID'}
        >
          <header>
            <HeaderBar />
            <NavigationBar logout={onLogoutHandler} username={authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/archived" element={<ArchivedNotesPage />} />
              <Route path="/notes/new" element={<AddNotesPage />} />
              <Route path="/notes/:id" element={<DetailNotesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <footer>
            <FooterBar />
          </footer>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
