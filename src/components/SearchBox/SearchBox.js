import React from "react";
import "./SearchBox.css";

function SearchBox({ placeholder, onSearchChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
}

export default SearchBox;
