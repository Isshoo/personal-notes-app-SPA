import React from 'react';
import { FaFolderPlus } from 'react-icons/fa';

function ArchiveBtn({ id, onArchiving }) {
  return (
    <button className="btn-archive" onClick={() => onArchiving(id)}>
      <FaFolderPlus />
    </button>
  );
}

export default ArchiveBtn;
