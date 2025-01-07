import React from 'react';
import { getNote } from '../utils/local-data';

class DetailNotesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(),
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    return <section className="pages-section">tes</section>;
  }
}

export default DetailNotesPage;
