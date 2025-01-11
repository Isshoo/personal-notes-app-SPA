import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function NavigationBar({ logout, username }) {
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
      <button className="logout" onClick={logout}>
        <p>{username}</p> <FiLogOut />
      </button>
    </nav>
  );
}

NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default NavigationBar;
