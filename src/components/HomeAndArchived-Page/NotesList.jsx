import React from 'react';
import NotesItem from './NotesItem';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../../contexts/LocaleContext';
import LoadingBar from '../Base/LoadingBar';

function NotesList({ notes, onDelete, onArchive, loading }) {
  const location = useLocation();

  if (loading) {
    return <LoadingBar />;
  }
  return (
    <>
      <div className="notes-list">
        {notes.length ? (
          notes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              {...note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))
        ) : (
          <LocaleConsumer>
            {({ locale }) => {
              if (locale === 'EN') {
                return (
                  <div className="blankList">
                    {location.pathname === '/' ? 'No notes' : 'Archive is empty'}
                  </div>
                );
              }
              return (
                <div className="blankList">
                  {location.pathname === '/' ? 'Tidak ada catatan' : 'Arsip kosong'}
                </div>
              );
            }}
          </LocaleConsumer>
        )}
      </div>
    </>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default NotesList;
