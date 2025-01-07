import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle } from 'react-icons/fi';

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <ul className="navigation">
        <li>
          <Link id="allNotesBtn" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link id="archivedListBtn" to="/archived">
            Archived
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
