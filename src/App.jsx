import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageWrapper from './pages/HomePage';
import ArchivedNotesPageWrapper from './pages/ArchivedNotesPage';
import AddNotesPage from './pages/AddNotesPage';
import DetailNotesPage from './pages/DetailNotesPage';
import NavigationBar from './components/Base/NavigationBar';

function App() {
  return (
    <div className="container">
      <header>
        <div className="header-bar">
          <h1 className="nav-title">Notes App React</h1>
        </div>
        <NavigationBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/archived" element={<ArchivedNotesPageWrapper />} />
          <Route path="/notes/new" element={<AddNotesPage />} />
          <Route path="/notes/:id" element={<DetailNotesPage />} />
        </Routes>
      </main>
      <footer>
        <div className="footer-bar">
          <p className="text-footer">&copy; Isshoo&apos;s Notes App React. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
