import React, { useState } from 'react'
import './dictionary.css';

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");

  const search = (event) => {
    event.preventDefault();
    alert(`Searching for: ${keyword}`);
  }

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }
  return <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
    </form>
  </div>;
}

export default Dictionary