import React, { useState } from "react";
import "./Search.css";

function Search({ darkMode, setSearchValue }) {

  const [search,setSearch] = useState("")

  const searchHandleChange = (e) => {
    setSearch(e.target.value)
    setSearchValue(search)
  }

  


  return (
    <div className="Search">
      <div className="search-container">
        <i
          class={
            darkMode
              ? "fa-solid fa-magnifying-glass darkmode-text"
              : "fa-solid fa-magnifying-glass"
          }
        ></i>
        <input className={darkMode ? "darkmode-text" : ""} type="text" placeholder="Search for notes..." onChange={searchHandleChange} />
      </div>
    </div>
  );
}

export default Search;
