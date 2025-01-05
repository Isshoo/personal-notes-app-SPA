import React from 'react';
import { FaFolderMinus } from 'react-icons/fa';

function UnarchiveBtn({ id, onUnarchiving }) {
  return (
    <button className="btn-unarchive" onClick={() => onUnarchiving(id)}>
      <FaFolderMinus />
    </button>
  );
}

export default UnarchiveBtn;
