import React from 'react';
import { getNote } from '../../utils/local-data';
import { useLocation } from 'react-router-dom';
import { FaFolderPlus, FaFolderMinus, FaTrashAlt } from 'react-icons/fa';

function NoteButtons({ id, onDelete, onArchive }) {
  const note = getNote(id);
  const location = useLocation();
  return (
    <div className={`buttons ${location.pathname.startsWith('/notes/') ? 'detail' : ''}`}>
      {note.archived ? (
        <button
          className={`btn-unarchive note-btn ${location.pathname.startsWith('/notes/') ? 'detail' : ''}`}
          onClick={() => onArchive(id)}
        >
          <FaFolderMinus />
        </button>
      ) : (
        <button
          className={`btn-archive note-btn ${location.pathname.startsWith('/notes/') ? 'detail' : ''}`}
          onClick={() => onArchive(id)}
        >
          <FaFolderPlus />
        </button>
      )}
      <button
        className={`btn-delete note-btn ${location.pathname.startsWith('/notes/') ? 'detail' : ''}`}
        onClick={() => onDelete(id)}
      >
        <FaTrashAlt className="delete-icon" />
      </button>
    </div>
  );
}

export default NoteButtons;
