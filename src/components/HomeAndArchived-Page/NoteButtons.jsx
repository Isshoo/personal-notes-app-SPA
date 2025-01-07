import React from 'react';
import { getNote } from '../../utils/local-data';
import { FaFolderPlus, FaFolderMinus, FaTrashAlt } from 'react-icons/fa';

function NoteButtons({ id, onDelete, onArchive }) {
  const note = getNote(id);
  return (
    <div className="buttons">
      {note.archived ? (
        <button className="btn-unarchive" onClick={() => onArchive(id)}>
          <FaFolderMinus />
        </button>
      ) : (
        <button className="btn-archive" onClick={() => onArchive(id)}>
          <FaFolderPlus />
        </button>
      )}
      <button className="btn-delete" onClick={() => onDelete(id)}>
        <FaTrashAlt className="delete-icon" />
      </button>
    </div>
  );
}

export default NoteButtons;
