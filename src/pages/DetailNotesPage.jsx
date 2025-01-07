import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';

function DetailNotesPageWrapper() {
  const { id } = useParams();
  return <DetailNotesPage id={id} />;
}

class DetailNotesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section className="pages-section">
        <h3>{this.state.note.title}</h3>
      </section>
    );
  }
}

export default DetailNotesPageWrapper;
