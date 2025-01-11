import React from 'react';
import { LocaleConsumer } from '../../contexts/LocaleContext';

function FooterBar() {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="footer-bar">
            <p className="text-footer">
              &copy;
              {locale === 'EN'
                ? ' Notes App React. All rights reserved.'
                : ' Aplikasi Catatan React. Seluruh hak cipta dilindungi.'}
            </p>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

export default FooterBar;
