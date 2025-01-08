import React from 'react';
import NotesItem from './NotesItem';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NotesList({ notes, onDelete, onArchive }) {
  const location = useLocation();
  return (
    <>
      <div className="notes-list">
        {notes.length ? (
          notes.map((note) => (
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
            {location.pathname === '/' ? 'Tidak ada catatan' : 'Arsip kosong'}
          </div>
        )}
      </div>
    </>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesList;
