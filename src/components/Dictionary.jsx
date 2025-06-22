import React, { useState, useEffect } from 'react'
import Results from './Results';
import axios from 'axios';
import './dictionary.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("sunset"); // User input
  const [results, setResults] = useState(null); // API response object
  const [loaded, setLoaded] = useState(false); // Loaded state

  //handleResponse is called when the API request is successful.
  //It receives the response object and updates the results state variable.
  const handleResponse = (response) => {
    console.log(response);
    setResults(response.data[0]);
    setLoaded(true);
  };

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  //handleSubmit uses the latest state value (keyword) when you submit.
  const handleSubmit = (event) => {
    event.preventDefault();
    search();
    // The search function is called when the form is submitted.
  };

  // This runs once when the component mounts
  useEffect(() => {
    search();
  }, []);

  //handleKeywordChange updates the state variable keyword every time you type in the input.
  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  if (!loaded) {
    return "Loading...";
  }


    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">suggested words: wine, yoga, sunset....</div>
        </section>
        <Results result={results} />
      </div>
    );
}

export default Dictionary