import React from 'react';
import ArchiveBtn from './ArchiveBtn';
import UnarchiveBtn from './UnarchiveBtn';
import DeleteBtn from './DeleteBtn';

function NoteButtons({ id, onDelete, onArchiving, onUnarchiving }) {
  return (
    <div className="buttons">
      <ArchiveBtn id={id} onArchiving={onArchiving} />
      <UnarchiveBtn id={id} onUnarchiving={onUnarchiving} />
      <DeleteBtn id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteButtons;
