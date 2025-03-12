import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../../Context/ShopContext";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(ShopContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchToggle()
    if (searchQuery.trim() !== "") {
      navigate(`/searchItem/${searchQuery}`);
    }
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
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
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
