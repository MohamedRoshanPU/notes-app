import React from "react";
import "./NoteList.css";
import Note from "./Note";
import AddNotes from "./AddNotes";

function NoteList({ notes, addNotes, deleteNote}) {
  return (
    <div className="NoteList">
      <div className="notelist-container">
        <AddNotes addNotes={addNotes} />
        {notes.map((note) => {
          return <Note notes={note} deleteNote = {deleteNote} />;
        })}
      </div>
    </div>
  );
}

export default NoteList;
