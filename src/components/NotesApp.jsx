import React from 'react';
import ContainerFormAddNotes from './ContainerFormAddNotes';
import ContainerNotes from './ContainerNotes';
import { getActiveNotes } from '../utils/local-data';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unarchivedNotes: getActiveNotes(),
      archivedNotes: [],
      searchQuery: '',
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivingHandler = this.onArchivingHandler.bind(this);
    this.onUnarchivingHandler = this.onUnarchivingHandler.bind(this);
    this.onShowArchiveHandler = this.onShowArchiveHandler.bind(this);
    this.onShowUnarchiveHandler = this.onShowUnarchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        unarchivedNotes: [
          ...prevState.unarchivedNotes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
    this.onShowUnarchiveHandler();
  }

  onDeleteHandler(id) {
    const unarchivedNotes = this.state.unarchivedNotes.filter((note) => note.id !== id);
    const archivedNotes = this.state.archivedNotes.filter((note) => note.id !== id);
    this.setState({ unarchivedNotes, archivedNotes });
  }

  onArchivingHandler(id) {
    const note = this.state.unarchivedNotes.find((note) => note.id === id);
    note.archived = true;
    this.setState((prevState) => {
      return {
        unarchivedNotes: prevState.unarchivedNotes.filter((note) => note.id !== id),
        archivedNotes: [...prevState.archivedNotes, note],
      };
    });
  }

  onUnarchivingHandler(id) {
    const note = this.state.archivedNotes.find((note) => note.id === id);
    note.archived = false;
    this.setState((prevState) => {
      return {
        unarchivedNotes: [...prevState.unarchivedNotes, note],
        archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
      };
    });
  }

  onShowArchiveHandler() {
    const unarchivedListBtn = document.querySelector('#allNotesBtn');
    const archivedListBtn = document.querySelector('#archivedListBtn');
    unarchivedListBtn.classList.remove('active');
    archivedListBtn.classList.add('active');

    const archivedListContainer = document.querySelector('#archivedListContainer');
    const unarchivedListContainer = document.querySelector('#unarchivedListContainer');
    archivedListContainer.style.display = 'grid';
    unarchivedListContainer.style.display = 'none';

    const unarchiveNoteBtn = document.querySelectorAll('.btn-unarchive');
    const archiveNoteBtn = document.querySelectorAll('.btn-archive');

    unarchiveNoteBtn.forEach((btn) => (btn.style.display = 'block'));
    archiveNoteBtn.forEach((btn) => (btn.style.display = 'none'));
  }

  onShowUnarchiveHandler() {
    const unarchivedListBtn = document.querySelector('#allNotesBtn');
    const archivedListBtn = document.querySelector('#archivedListBtn');
    archivedListBtn.classList.remove('active');
    unarchivedListBtn.classList.add('active');

    const archivedListContainer = document.querySelector('#archivedListContainer');
    const unarchivedListContainer = document.querySelector('#unarchivedListContainer');
    archivedListContainer.style.display = 'none';
    unarchivedListContainer.style.display = 'grid';

    const unarchiveNoteBtn = document.querySelectorAll('.btn-unarchive');
    const archiveNoteBtn = document.querySelectorAll('.btn-archive');

    unarchiveNoteBtn.forEach((btn) => (btn.style.display = 'none'));
    archiveNoteBtn.forEach((btn) => (btn.style.display = 'block'));
  }

  onSearchHandler(query) {
    this.setState({ searchQuery: query });
  }
  render() {
    return (
      <main>
        <ContainerFormAddNotes addNotes={this.onAddNotesHandler} />
        <ContainerNotes
          unarchivedNotes={this.state.unarchivedNotes}
          archivedNotes={this.state.archivedNotes}
          searchQuery={this.state.searchQuery}
          onDelete={this.onDeleteHandler}
          onArchiving={this.onArchivingHandler}
          onUnarchiving={this.onUnarchivingHandler}
          onShowArchivedList={this.onShowArchiveHandler}
          onShowUnarchivedList={this.onShowUnarchiveHandler}
          onSearchNotes={this.onSearchHandler}
        />
      </main>
    );
  }
}

export default NotesApp;
