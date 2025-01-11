import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../../contexts/LocaleContext';

function SearchNotesForm({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <form id="searchForm">
            <input
              type="text"
              id="searchInput"
              placeholder={locale === 'EN' ? 'Search notes...' : 'Cari catatan...'}
              value={keyword}
              onChange={(event) => keywordChange(event.target.value)}
            />
            <button type="submit" id="searchSubmit" disabled>
              <FaSearch className="search-icon" />
            </button>
          </form>
        );
      }}
    </LocaleConsumer>
  );
}

SearchNotesForm.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchNotesForm;
