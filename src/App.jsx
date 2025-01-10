import React from 'react';
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
import NavigationBar from './components/Base/NavigationBar';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState('dark');
  const [locale, setLocale] = React.useState('id');

  React.useEffect(() => {
    async function fetchUserData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    fetchUserData();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === 'id' ? 'en' : 'id';
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

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
          <div className="container">
            <header>
              <div className="header-bar">
                <h1 className="nav-title">Notes App React</h1>
              </div>
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
            <footer>
              <div className="footer-bar">
                <p className="text-footer">
                  &copy; Isshoo&apos;s Notes App React. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
  return (
    <LocaleProvider value={localeContextValue}>
      <ThemeProvider value={themeContextValue}>
        <div className="container">
          <header>
            <div className="header-bar">
              <h1 className="nav-title">Notes App React</h1>
            </div>
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
            <div className="footer-bar">
              <p className="text-footer">
                &copy; Isshoo&apos;s Notes App React. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
