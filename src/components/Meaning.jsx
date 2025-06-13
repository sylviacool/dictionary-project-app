import React from 'react'

const Meaning = ( {meaning} ) => {
  return (
    <div className="Meaning">
      <br />
      <h3>Part of Speech: {meaning.partOfSpeech}</h3>

      {meaning.definitions?.map((def, i) => (
        <div key={i}>
          <p>Definition: {def.definition}</p>

          {/* Only show Example if it exists */}
          <em>{def.example && <p>Example: {def.example}</p>}</em>
          {def.synonyms && def.synonyms.length > 0 && (
            <p>Synonyms: {def.synonyms.join(", ")}</p>
          )}
        </div>
      ))}
    </div>
  );
  
  }

export default Meaning