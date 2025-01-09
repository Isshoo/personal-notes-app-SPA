import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

function SearchNotesForm({ keyword, keywordChange }) {
  return (
    <form id="searchForm">
      <input
        type="text"
        id="searchInput"
        placeholder="Cari Notes..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
      <button type="submit" id="searchSubmit" disabled>
        <FaSearch className="search-icon" />
      </button>
    </form>
  );
}

SearchNotesForm.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchNotesForm;
