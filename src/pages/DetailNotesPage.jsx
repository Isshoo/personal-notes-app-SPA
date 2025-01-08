import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import NotesDetail from '../components/NoteDetail-Page/NotesDetail';

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
    deleteNote(id);
    this.props.navigate('/');
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

export default DetailNotesPageWrapper;
