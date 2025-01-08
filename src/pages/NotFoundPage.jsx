import React from 'react';
import AddPageLink from '../components/HomeAndArchived-Page/AddPageLink';

function NotFoundPage() {
  return (
    <>
      <div className="notFound-container">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
      <AddPageLink />
    </>
  );
}

export default NotFoundPage;
