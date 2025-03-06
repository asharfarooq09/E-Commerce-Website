import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchToggle = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchVisible(false);
  };
  return (
    <>
      <CiSearch className="search-icon" onClick={handleSearchToggle} />
      <div
        className={`overlay ${isSearchVisible ? "show" : ""}`}
        onClick={() => setIsSearchVisible(false)}
      ></div>
      <div className={`centered-search ${isSearchVisible ? "show" : ""}`}>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
