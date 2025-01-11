import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { addNote } from '../utils/network-data';
import FormAddNotes from '../components/AddNotes-Page/FormAddNotes';
import { useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function AddNotesPage() {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  async function onAddNoteHandler(note) {
    await addNote(note);
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
      <div id="formNewNotes" className="form-container">
        <h2>{locale === 'EN' ? 'New Notes' : 'Catatan Baru'}</h2>
        <FormAddNotes addNote={onAddNoteHandler} />
      </div>
    </section>
  );
}

export default AddNotesPage;
