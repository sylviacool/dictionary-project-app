import React from 'react'
import Dictionary from "./components/Dictionary"
import Dict from "./assets/Dict.jpg"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={Dict}
            alt="Dictionary Image"
            className="App-Img img-fluid"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>coded by Ogechi</small>
        </footer>
      </div>
    </div>
  );
}

export default App