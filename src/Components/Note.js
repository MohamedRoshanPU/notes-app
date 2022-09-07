import React from "react";
import "./Note.css";

function Note({ notes, deleteNote }) {


  
  return (
    <div className="Note">
       <div className="note-container" key={notes.id}>
            <p className="notes">{notes.note}</p>
            <div className="note-footer">
              <p className="date">{notes.date}</p>
              <i class="fa-solid fa-trash" onClick={()=>{deleteNote(notes.id)}}></i>
            </div>
          </div>
    </div>
  );
}

export default Note;
