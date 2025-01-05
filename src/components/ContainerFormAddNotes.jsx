import React from 'react';
import FormAddNotes from './FormAddNotes';

function ContainerFormAddNotes({ addNotes }) {
  return (
    <section id="formNewNotes">
      <h2>New Notes</h2>
      <FormAddNotes addNotes={addNotes} />
    </section>
  );
}

export default ContainerFormAddNotes;
