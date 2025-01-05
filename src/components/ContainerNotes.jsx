import React from 'react';
import ShowUnarchivedListBtn from './ShowUnarchivedListBtn';
import ShowArchivedListBtn from './ShowArchivedListBtn';
import SearchNotesForm from './SearchNotesForm';
import NotesList from './NotesList';

function ContainerNotes({
  unarchivedNotes,
  archivedNotes,
  searchQuery,
  onDelete,
  onArchiving,
  onUnarchiving,
  onShowArchivedList,
  onShowUnarchivedList,
  onSearchNotes,
}) {
  return (
    <section id="notesContainer">
      <div className="judul-notes-container">
        <h2>My Notes</h2>
      </div>
      <ShowUnarchivedListBtn onShowUnarchivedList={onShowUnarchivedList} />
      <ShowArchivedListBtn onShowArchivedList={onShowArchivedList} />
      <SearchNotesForm onSearchNotes={onSearchNotes} />
      <NotesList
        searchQuery={searchQuery}
        unarchivedNotes={unarchivedNotes}
        archivedNotes={archivedNotes}
        onDelete={onDelete}
        onArchiving={onArchiving}
        onUnarchiving={onUnarchiving}
      />
    </section>
  );
}

export default ContainerNotes;
