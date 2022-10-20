import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";

const App = () => {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "First Note!",
    date: "15/04/2021"
  }, {
    id: nanoid(),
    text: "Second Note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "Third Note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "Fourth Note!",
    date: "15/04/2021"
  }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState('');

  return <div className="container">
    <Search handleSearchNote={setSearchText} />
    <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
  </div>
}

export default App;