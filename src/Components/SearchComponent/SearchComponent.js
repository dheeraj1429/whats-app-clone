import React from "react";

import "./SearchComponent.css";

function SearchComponent() {
  return (
    <div className="SearchComponent">
      <div className="SearchBar">
        <div className="SearchIconBox">
          <i class="fas fa-search"></i>
        </div>
        <input type="search" placeholder="Search or start new char" />
      </div>
    </div>
  );
}

export default SearchComponent;
