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
import HeaderBar from './components/Base/HeaderBar';
import FooterBar from './components/Base/FooterBar';
import NavigationBar from './components/Base/NavigationBar';
import { getUserLogged, putAccessToken } from './utils/network-data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem('locale') || 'EN',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === 'EN' ? 'ID' : 'EN';
            localStorage.setItem('locale', newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
      themeContext: {
        theme: localStorage.getItem('theme') || 'dark',
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme = prevState.themeContext.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            return {
              themeContext: {
                ...prevState.themeContext,
                theme: newTheme,
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogoutHandler = this.onLogoutHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogoutHandler() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <ThemeProvider value={this.state.themeContext}>
            <div
              className="container"
              data-theme={this.state.themeContext.theme === 'dark' ? '' : 'light'}
              data-lang={this.state.localeContext.locale === 'EN' ? '' : 'ID'}
            >
              <header>
                <HeaderBar />
              </header>
              <main>
                <Routes>
                  <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
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
      <LocaleProvider value={this.state.localeContext}>
        <ThemeProvider value={this.state.themeContext}>
          <div
            className="container"
            data-theme={this.state.themeContext.theme === 'dark' ? '' : 'light'}
            data-lang={this.state.localeContext.locale === 'EN' ? '' : 'ID'}
          >
            <header>
              <HeaderBar />
              <NavigationBar logout={this.onLogoutHandler} username={this.state.authedUser.name} />
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
}

export default App;
