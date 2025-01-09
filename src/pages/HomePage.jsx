import React from 'react';
import Swal from 'sweetalert2';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data';
import NotesList from '../components/HomeAndArchived-Page/NotesList';
import SearchNotesForm from '../components/HomeAndArchived-Page/SearchNotesForm';
import AddPageLink from '../components/HomeAndArchived-Page/AddPageLink';
import PropTypes from 'prop-types';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivingHandler = this.onArchivingHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Catatan ini akan dihapus secara permanen.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);

        this.setState(() => {
          return {
            notes: getActiveNotes(),
          };
        });

        Swal.fire({
          title: 'Berhasil!',
          text: 'Catatan telah dihapus.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }
    });
  }

  onArchivingHandler(id) {
    archiveNote(id);

    // update the contact state from data.js
    this.setState(() => {
      return {
        notes: getActiveNotes(),
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
          onArchive={this.onArchivingHandler}
        />
        <AddPageLink />
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
