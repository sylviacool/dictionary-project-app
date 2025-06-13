import React, { useState } from 'react'
import Results from './Results';
import axios from 'axios';
import './dictionary.css';

const Dictionary = () => {
  const [keyword, setKeyword] = useState(""); // User input
  const [results, setResults] = useState(null); // API response object

  //handleResponse is called when the API request is successful.
  //It receives the response object and updates the results state variable.
  const handleResponse = (response) => {
    console.log(response);
    setResults(response.data[0]);
  };

  //search uses the latest state value (keyword) when you submit.
  const search = (event) => {
    event.preventDefault();
    alert(`Searching for: ${keyword}`);

    //let apiKey = "36dbadda4844et80d39a8b26da0ofdb7";
    //const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
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
      <Results result={results} />
    </div>
  );
}

export default Dictionary