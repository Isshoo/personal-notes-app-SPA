import React from 'react';

function ShowUnarchivedListBtn({ onShowUnarchivedList }) {
  return (
    <button id="allNotesBtn" className="active" onClick={() => onShowUnarchivedList()}>
      Unarchived
    </button>
  );
}

export default ShowUnarchivedListBtn;
