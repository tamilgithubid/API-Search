import './SearchBar.css'
import React, { useState } from "react";

function SearchBar() {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTerm(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
      <label>Enter Search</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
