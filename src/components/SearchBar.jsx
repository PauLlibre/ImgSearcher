import { useState } from "react";
import "./SearchBar.scss";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(term);
  };

  const handleChange = (ev) => {
    setTerm(ev.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} type="text" />
      </form>
    </div>
  );
}

export default SearchBar;
