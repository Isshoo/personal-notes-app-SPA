import React from 'react';
import Header from './Header';
import NotesApp from './NotesApp';
import Footer from './Footer';

function NotesAppContainer() {
  return (
    <div className="container">
      <Header />
      <NotesApp />
      <Footer />
    </div>
  );
}

export default NotesAppContainer;
