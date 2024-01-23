import './Note.scss';
import { useState } from 'react';
import { Edit, Edit2, Delete } from 'react-feather';

export default function Note({ note, notes, setNotes }) {
  const date = new Date(note.timestamp).toLocaleDateString();

  const [editMode, setEditMode] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState(note.text);

  function handleDelete(e) {
    const notesCopy = [...notes];
    const index = notesCopy.findIndex(
      (elem) => elem.id === Number(e.target.value)
    );
    if (index >= 0) notesCopy.splice(index, 1);
    setNotes(notesCopy);
  }

  function handleEdit() {
    setEditMode(!editMode);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const notesCopy = [...notes];
    const index = notesCopy.findIndex(
      (elem) => elem.id === Number(e.target.id)
    );
    if (textAreaValue === '') notesCopy.splice(index, 1);
    else {
      notesCopy[index] = {
        ...notesCopy[index],
        text: textAreaValue,
      };
    }
    setEditMode(false);
    setNotes(notesCopy);
  }

  return (
    <div className="note">
      <div className="note__top">
        <div className="note__time">{date}</div>
        <div>
          <button
            className="note__btn"
            type="button"
            value={note.id}
            onClick={handleEdit}
            aria-label="Editer"
          >
            <Edit size="70%" />
          </button>
          <button
            value={note.id}
            className="note__btn"
            type="button"
            onClick={handleDelete}
            aria-label="Supprimer"
          >
            <Delete size="70%" />
          </button>
        </div>
      </div>
      {editMode ? (
        <form onSubmit={handleEditSubmit} id={note.id} className="note--form">
          <textarea
            onChange={(event) => setTextAreaValue(event.target.value)}
            value={textAreaValue}
          />
          <button type="submit" className="note__btn">
          <Edit2 size="50%" />
          </button>
        </form>
      ) : (
        <p className="note__content">{note.text}</p>
      )}
    </div>
  );
}
