import React from 'react';
import NotesItem from './NotesItem';

function NotesList({
  unarchivedNotes,
  archivedNotes,
  onDelete,
  onArchiving,
  onUnarchiving,
  searchQuery,
}) {
  return (
    <>
      <div className="notes-list" id="unarchivedListContainer">
        {unarchivedNotes.length > 0 ? (
          unarchivedNotes.filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
          ).length > 0 ? (
            unarchivedNotes
              .filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((note) => (
                <NotesItem
                  key={note.id}
                  id={note.id}
                  {...note}
                  onDelete={onDelete}
                  onArchiving={onArchiving}
                  onUnarchiving={onUnarchiving}
                />
              ))
          ) : (
            <div className="blankList">Tidak ada catatan dengan judul "{searchQuery}"</div>
          )
        ) : (
          <div className="blankList">Tidak ada catatan</div>
        )}
      </div>

      <div className="notes-list" id="archivedListContainer">
        {archivedNotes.length > 0 ? (
          archivedNotes.filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
          ).length > 0 ? (
            archivedNotes
              .filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((note) => (
                <NotesItem
                  key={note.id}
                  id={note.id}
                  {...note}
                  onDelete={onDelete}
                  onArchiving={onArchiving}
                  onUnarchiving={onUnarchiving}
                />
              ))
          ) : (
            <div className="blankList">
              Tidak ada catatan yang terarsip dengan judul "{searchQuery}"
            </div>
          )
        ) : (
          <div className="blankList">Tidak ada catatan yang terarsip</div>
        )}
      </div>
    </>
  );
}

export default NotesList;
