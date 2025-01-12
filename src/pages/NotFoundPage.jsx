import React, { useContext } from 'react';
import AddPageLink from '../components/HomeAndArchived-Page/AddPageLink';
import LocaleContext from '../contexts/LocaleContext';

function NotFoundPage() {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <div className="notFound-container">
        <h1>404</h1>
        <p>{locale === 'EN' ? 'Page Not Found' : 'Halaman tidak ditemukan'}</p>
      </div>
      <AddPageLink />
    </>
  );
}

export default NotFoundPage;
