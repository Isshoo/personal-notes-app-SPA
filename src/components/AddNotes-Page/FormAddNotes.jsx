import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../../contexts/LocaleContext';

class FormAddNotes extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      titleMaxLength: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const maxLength = this.state.titleMaxLength;
    const inputValue = event.target.value;

    if (inputValue.length <= maxLength) {
      this.setState(() => {
        return {
          title: inputValue,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <form id="noteForm" autoComplete="off" onSubmit={this.onSubmitEventHandler}>
              <div>
                <label htmlFor="title">{locale === 'EN' ? 'Title' : 'Judul'}</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  placeholder={locale === 'EN' ? 'Title' : 'Judul'}
                  aria-describedby="titleValidation"
                  value={this.state.title}
                  onChange={this.onTitleChangeEventHandler}
                />
                <p id="titleValidation" className="validation-message" aria-live="polite">
                  {locale === 'EN' ? 'Numbers of characters left :' : 'Jumlah karakter tersisa :'}{' '}
                  {this.state.titleMaxLength - this.state.title.length}
                </p>
              </div>
              <div>
                <label>{locale === 'EN' ? 'Description' : 'Deskripsi'}</label>
                <div
                  id="description"
                  data-placeholder={locale === 'EN' ? 'Description' : 'Deskripsi'}
                  aria-describedby="descriptionValidation"
                  contentEditable
                  required
                  onInput={this.onBodyChangeEventHandler}
                ></div>
                <p id="descriptionValidation" className="validation-message" aria-live="polite"></p>
              </div>
              <button type="submit" id="notesSubmit">
                {locale === 'EN' ? 'Add' : 'Tambahkan'}
              </button>
            </form>
          );
        }}
      </LocaleConsumer>
    );
  }
}

FormAddNotes.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default FormAddNotes;
