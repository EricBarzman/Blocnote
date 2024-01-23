import './Form.scss';

export default function Form({ value, setValue, notes, setNotesList }) {
  function handleSubmit(e) {
    e.preventDefault();
    const id = notes.length;
    const newNotes = [...notes];
    newNotes.push({
      id: id + 1,
      timestamp: Date.now(),
      text: value,
    });
    setNotesList(newNotes);
    setValue('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form__input"
        placeholder="Tapez votre texte ici..."
      />
      <button type="submit" className="form__btn">
        Ajouter
      </button>
    </form>
  );
}
