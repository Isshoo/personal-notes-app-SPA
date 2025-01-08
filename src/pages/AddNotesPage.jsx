import React from 'react';
import Swal from 'sweetalert2';
import { addNote } from '../utils/local-data';
import FormAddNotes from '../components/AddNotes-Page/FormAddNotes';
import { useNavigate } from 'react-router-dom';

function AddNotesPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    Swal.fire({
      title: 'Berhasil!',
      text: 'Catatan baru telah ditambahkan.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <section className="pages-section">
      <div id="formNewNotes">
        <h2>New Notes</h2>
        <FormAddNotes addNote={onAddNoteHandler} />
      </div>
    </section>
  );
}

export default AddNotesPage;
