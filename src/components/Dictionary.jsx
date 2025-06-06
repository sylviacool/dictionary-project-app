import React, { useState } from 'react'
import axios from 'axios';
import './dictionary.css';

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");

  const handleResponse = (response) => {
    setKeyword(response.data[0]);
  };

  //search uses the latest state value (keyword) when you submit.
  const search = (event) => {
    event.preventDefault();
    alert(`Searching for: ${keyword}`);

    let apiKey = "36dbadda4844et80d39a8b26da0ofdb7";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    //const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  };

  //handleKeywordChange updates the state variable keyword every time you type in the input.
  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}

export default Dictionary