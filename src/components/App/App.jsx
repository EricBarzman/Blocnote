import './App.scss';
import { useState } from 'react';
import Form from '../Form/Form';
import NotesList from '../NotesList/NotesList';
import Header from '../Header/Header';
import notes from '../../data/notes';

function App() {
  const [value, setValue] = useState('');
  const [notesList, setNotesList] = useState(notes);

  return (
    <div className="app">
      <Header />
      <NotesList notes={notesList} setNotes={setNotesList} value={value} />
      <Form
        value={value}
        setValue={setValue}
        notes={notesList}
        setNotesList={setNotesList}
      />
    </div>
  );
}

export default App;
