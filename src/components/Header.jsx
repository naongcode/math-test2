import React, { useState } from 'react'
import './header.css'

export default function Header() {

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
        console.log("검색어:", query);
    }
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
          <input
              className="search-input"
              type="text"
              value={query}
              onChange={(e)=> setQuery(e.target.value)}
              placeholder="Search..." />
          <button onClick={handleSearch} className="search-button">검색</button>
      </div>
    </div>
  )
}
