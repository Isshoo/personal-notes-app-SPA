import React from 'react';

function ShowArchivedListBtn({ onShowArchivedList }) {
  return (
    <button id="archivedListBtn" onClick={() => onShowArchivedList()}>
      Archived
    </button>
  );
}

export default ShowArchivedListBtn;
