import React, { useState } from "react";
import "./AddNotes.css";

function AddNotes({ addNotes }) {
  const [note, setNote] = useState("");
  const charLimit = 200;

  const handleChange = (e) => {
    if (charLimit - e.target.value.length < 0) {
      alert("Sorry your limit is over");
    } else {
      setNote(e.target.value);
    }
  };

  const getNoteValues = () => {
    addNotes(note);
    setNote("")
  };

  return (
    <div className="AddNotes">
      <div className="addnote-container">
        <textarea
          rows="8"
          cols="10"
          placeholder="Add your Notes..."
          onChange={handleChange}
          value={note}
        ></textarea>
        <div className="addnote-footer">
          <p className="remaining-char">{charLimit - note.length} Char remaining</p>
          <button className="save" onClick={getNoteValues}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNotes;
