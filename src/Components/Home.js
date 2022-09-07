import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "./Header";
import Search from "./Search";
import NoteList from "./NoteList";
import uuid from "react-uuid";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const settingDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addNotes = (note) => {
    let date = new Date();
    console.log(date);
    let newNote = {
      id: uuid(),
      note: note,
      date: date.toLocaleDateString(),
    };

    if (note.trim().length > 0) {
      setNotes([...notes, newNote]);
    } else {
      alert("Please add a note");
    }
  };

  const deleteNote = (id) => {
    let newArray = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newArray);
  };

  return (
    <div className="Home">
      <div className={darkMode ? "container darkmode" : "container"}>
        <Header settingDarkMode={settingDarkMode} darkMode={darkMode} />
        <Search darkMode={darkMode} setSearchValue={setSearchValue} />
        <NoteList
          notes={notes.filter((note) =>
            note.note.toLowerCase().includes(searchValue)
          )}
          addNotes={addNotes}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default Home;
