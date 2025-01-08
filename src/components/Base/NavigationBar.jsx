import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();

  return (
    <nav className="navigation-bar">
      <ul className="navigation">
        <li>
          <Link
            id="allNotesBtn"
            className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            id="archivedListBtn"
            className={`nav-button ${location.pathname === '/archived' ? 'active' : ''}`}
            to="/archived"
          >
            Archived
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
