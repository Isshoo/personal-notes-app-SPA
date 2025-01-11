import React from 'react';
import { MdOutlineWbSunny, MdSunny } from 'react-icons/md';
import { LocaleConsumer } from '../../contexts/LocaleContext';
import { ThemeConsumer } from '../../contexts/ThemeContext';

function HeaderBar() {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <ThemeConsumer>
            {({ theme, toggleTheme }) => {
              return (
                <div className="header-bar">
                  <h1 className="nav-title">
                    {locale === 'EN' ? 'Notes App React' : 'Aplikasi Catatan React'}
                  </h1>
                  <div className="header-buttons">
                    <button onClick={toggleTheme}>
                      {theme === 'dark' ? <MdOutlineWbSunny /> : <MdSunny />}
                    </button>
                    <button onClick={toggleLocale}>{locale === 'EN' ? 'EN' : 'ID'}</button>
                  </div>
                </div>
              );
            }}
          </ThemeConsumer>
        );
      }}
    </LocaleConsumer>
  );
}

export default HeaderBar;
