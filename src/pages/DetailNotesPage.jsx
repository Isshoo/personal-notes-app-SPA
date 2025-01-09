import React from 'react';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import NotesDetail from '../components/NoteDetail-Page/NotesDetail';
import PropTypes from 'prop-types';

function DetailNotesPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailNotesPage id={id} navigate={navigate} />;
}

class DetailNotesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivingHandler = this.onArchivingHandler.bind(this);
    this.onUnarchivingHandler = this.onUnarchivingHandler.bind(this);
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Catatan ini akan dihapus secara permanen.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id); // Menghapus catatan

        Swal.fire({
          title: 'Berhasil!',
          text: 'Catatan telah dihapus.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          this.props.navigate('/');
        });
      }
    });
  }

  onArchivingHandler(id) {
    archiveNote(id);
    this.props.navigate('/archived');
  }

  onUnarchivingHandler(id) {
    unarchiveNote(id);
    this.props.navigate('/');
  }

  render() {
    if (!this.state.note) {
      return <p>Note is not found!</p>;
    }

    return (
      <section className="pages-section">
        <div className="detail-con">
          <NotesDetail
            {...this.state.note}
            onDelete={this.onDeleteHandler}
            onArchive={
              this.state.note.archived ? this.onUnarchivingHandler : this.onArchivingHandler
            }
          />
        </div>
      </section>
    );
  }
}

DetailNotesPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailNotesPageWrapper;
