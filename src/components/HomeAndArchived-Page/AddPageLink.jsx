import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

function AddPageLink() {
  return (
    <div id="addPageLink">
      <Link to="/notes/new">
        <FaPlus />
      </Link>
    </div>
  );
}

export default AddPageLink;
