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

  return <div className="container">
    <NotesList notes={notes} />
  </div>
}

export default App;