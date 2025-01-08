import React from 'react';
import NoteButtons from './NoteButtons';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../../utils';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

function NotesItem({ id, archived, title, body, createdAt, onDelete, onArchive }) {
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
          <p>{parser(body)}</p>
        </div>
        <NoteButtons id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
      </div>
    </div>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesItem;
