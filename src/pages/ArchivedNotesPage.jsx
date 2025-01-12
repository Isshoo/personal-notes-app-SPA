import React from 'react';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/network-data';
import NotesList from '../components/HomeAndArchived-Page/NotesList';
import SearchNotesForm from '../components/HomeAndArchived-Page/SearchNotesForm';
import AddPageLink from '../components/HomeAndArchived-Page/AddPageLink';
import useSearch from '../hooks/useSearch';

function ArchivedNotesPage() {
  const [notes, setNotes] = useState([]);
  const [keyword, onKeywordChangeHandler] = useSearch();

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

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

      const { data } = await getArchivedNotes();
      setNotes(data);

      await Swal.fire({
        title: 'Berhasil!',
        text: 'Catatan telah dihapus.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
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

  async function onUnarchivingHandler(id) {
    await unarchiveNote(id);

    const { data } = await getArchivedNotes();
    setNotes(data);
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="pages-section">
      <SearchNotesForm keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <br />
      <NotesList
        notes={filteredNotes}
        onDelete={onDeleteHandler}
        onArchive={onUnarchivingHandler}
      />
      <AddPageLink />
    </section>
  );
}

export default ArchivedNotesPage;
