import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesAppContainer from './components/NotesAppContainer';

// import style
import './styles/main.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/notesList.css';
import './styles/notesItem.css';
import './styles/formAddNotes.css';
import './styles/containerNotes.css';

const root = createRoot(document.getElementById('root'));
root.render(<NotesAppContainer />);
