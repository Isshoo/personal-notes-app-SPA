import React from 'react';
import { FaSearch } from 'react-icons/fa';

class SearchNotesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };

    this.onInputQueryChangeEventHandler = this.onInputQueryChangeEventHandler.bind(this);
    this.onSubmitQueryEventHandler = this.onSubmitQueryEventHandler.bind(this);
  }

  onInputQueryChangeEventHandler = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
    this.props.onSearchNotes(event.target.value);
  };
  onSubmitQueryEventHandler = (event) => {
    event.preventDefault();
    this.props.onSearchNotes(this.state.searchQuery);
  };

  render() {
    return (
      <form id="searchForm" onSubmit={this.onSubmitQueryEventHandler}>
        <input
          type="text"
          id="searchInput"
          placeholder="Cari Notes"
          onChange={this.onInputQueryChangeEventHandler}
        />
        <button type="submit" id="searchSubmit">
          <FaSearch className="search-icon" />
        </button>
      </form>
    );
  }
}

export default SearchNotesForm;
