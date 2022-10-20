import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    
    const [noteText, setNoteText]  = useState('');

    const charaterLimit = 200;

    const handleChange = (e) => {
        if(charaterLimit - e.target.value.length >= 0){
            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return(<div className="note new">
        <textarea rows="8" cols="10" placeholder="Add Note Here..." onChange={handleChange} value={noteText} ></textarea>
        <div className="note-footer">
            <small>{charaterLimit - noteText.length}</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>)
}

export default AddNote;