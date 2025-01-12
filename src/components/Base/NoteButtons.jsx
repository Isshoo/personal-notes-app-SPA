import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaFolderPlus, FaFolderMinus, FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

function NoteButtons({ id, archived, onDelete, onArchive }) {
  const location = useLocation();
  return (
    <div className={`buttons ${location.pathname.startsWith('/notes/') ? 'detail' : ''}`}>
      {archived ? (
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

NoteButtons.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteButtons;
