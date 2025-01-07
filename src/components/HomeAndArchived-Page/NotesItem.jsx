import React from 'react';
import NoteButtons from './NoteButtons';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../../utils';

function NotesItem({ id, title, body, createdAt, onDelete, onArchive }) {
  return (
    <div className="note">
      <div className="notes-item">
        <div className="note-title">
          <h3>
            <Link to={`/notes/${id}`}>{title}</Link>
          </h3>
        </div>
        <div className="note-date">
          <p>{showFormattedDate(createdAt)}</p>
        </div>
        <div className="note-des">
          <p>{body}</p>
        </div>
        <NoteButtons id={id} onDelete={onDelete} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NotesItem;
