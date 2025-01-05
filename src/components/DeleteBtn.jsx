import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function DeleteBtn({ id, onDelete }) {
  return (
    <button className="btn-delete" onClick={() => onDelete(id)}>
      <FaTrashAlt className="delete-icon" />
    </button>
  );
}

export default DeleteBtn;
