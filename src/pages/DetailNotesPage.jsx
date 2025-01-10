import React from 'react';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import NotesDetail from '../components/NoteDetail-Page/NotesDetail';

function DetailNotesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    async function fetchNoteData() {
      const { data } = await getNote(id);
      setNote(data);
    }

    fetchNoteData();

    return () => {
      setNote(null);
    };
  }, [id]);

  async function onDeleteHandler(id) {
    try {
      const result = await Swal.fire({
        title: 'Apakah Anda yakin?',
        text: 'Catatan ini akan dihapus secara permanen.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batal',
      });

      if (!result.isConfirmed) {
        return;
      }

      await deleteNote(id);

      await Swal.fire({
        title: 'Berhasil!',
        text: 'Catatan telah dihapus.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      navigate('/');
    } catch (error) {
      console.error('Error saat menghapus catatan:', error);

      await Swal.fire({
        title: 'Gagal!',
        text: 'Terjadi kesalahan saat menghapus catatan. Silakan coba lagi.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }

  async function onArchivingHandler(id) {
    await archiveNote(id);
    navigate('/archived');
  }

  async function onUnarchivingHandler(id) {
    await unarchiveNote(id);
    navigate('/');
  }

  if (!note) {
    return <p>Note is not found!</p>;
  }

  return (
    <section className="pages-section">
      <div className="detail-con">
        <NotesDetail
          {...note}
          onDelete={onDeleteHandler}
          onArchive={note.archived ? onUnarchivingHandler : onArchivingHandler}
        />
      </div>
    </section>
  );
}

export default DetailNotesPage;
