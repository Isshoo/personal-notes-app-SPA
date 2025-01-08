import React from 'react';
import { showFormattedDate } from '../../utils';
import NoteButtons from '../HomeAndArchived-Page/NoteButtons';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

function NotesDetail({ id, archived, title, body, createdAt, onDelete, onArchive }) {
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
          <p>{parser(body)}</p>
        </div>
        <NoteButtons id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
      </div>
    </div>
  );
}

NotesDetail.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesDetail;
