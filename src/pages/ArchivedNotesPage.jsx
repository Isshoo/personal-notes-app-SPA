import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/local-data';
import NotesList from '../components/HomeAndArchived-Page/NotesList';
import SearchNotesForm from '../components/HomeAndArchived-Page/SearchNotesForm';
import AddPageLink from '../components/HomeAndArchived-Page/AddPageLink';

function ArchivedNotesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivedNotesPage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class ArchivedNotesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onUnarchivingHandler = this.onUnarchivingHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    // update the contact state from data.js
    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }
  onUnarchivingHandler(id) {
    unarchiveNote(id);

    // update the contact state from data.js
    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });
    return (
      <section className="pages-section">
        <SearchNotesForm keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <br />
        <NotesList
          notes={notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onUnarchivingHandler}
          searchQuery={this.state.keyword}
        />
        <AddPageLink />
      </section>
    );
  }
}

export default ArchivedNotesPageWrapper;
