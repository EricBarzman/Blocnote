import './NotesList.scss';
import Note from '../Note/Note';

export default function NotesList({ notes, setNotes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} setNotes={setNotes} notes={notes} />
      ))}
    </div>
  );
}
