import React from 'react';
import { showFormattedDate } from '../../utils';
import NoteButtons from '../HomeAndArchived-Page/NoteButtons';

function NotesDetail({ id, title, body, createdAt, onDelete, onArchive }) {
  return (
    <div className="note detail">
      <div className="notes-item detail">
        <div className="note-title detail">
          <h3>{title}</h3>
        </div>
        <div className="note-date detail">
          <p>{showFormattedDate(createdAt)}</p>
        </div>
        <div className="note-des detail">
          <p>{body}</p>
        </div>
        <NoteButtons id={id} onDelete={onDelete} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NotesDetail;
