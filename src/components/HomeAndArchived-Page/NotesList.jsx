import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete, onArchive, searchQuery }) {
  return (
    <>
      <div className="notes-list">
        {notes.length ? (
          notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .length ? (
            notes
              .filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((note) => (
                <NotesItem
                  key={note.id}
                  id={note.id}
                  {...note}
                  onDelete={onDelete}
                  onArchive={onArchive}
                />
              ))
          ) : (
            <div className="blankList">
              Tidak ada catatan dengan judul &quot;{searchQuery}&quot;
            </div>
          )
        ) : (
          <div className="blankList">Tidak ada catatan</div>
        )}
      </div>
    </>
  );
}

export default NotesList;
