import React from "react";
import "./Header.css";

function Header({ settingDarkMode, darkMode }) {
  return (
    <div>
      <div className="header">
        <h3 className={darkMode ? "logo darkmode-text" : "logo"}>NOTES APP</h3>
        <button className="toggle" onClick={settingDarkMode}>
          <i class={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          Toggle {darkMode ? "Daymode" : "Darkmode"}
        </button>
      </div>
    </div>
  );
}

export default Header;
