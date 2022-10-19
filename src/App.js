import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

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

  return <div className="container">
    <NotesList notes={notes} handleAddNote={addNote} />
  </div>
}

export default App;