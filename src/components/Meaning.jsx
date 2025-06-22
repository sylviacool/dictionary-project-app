import React from 'react'
import './meaning.css'; 

const Meaning = ( {meaning} ) => {
  return (
    <div className="Meaning">
      <br />
      <h3>Part of Speech: {meaning.partOfSpeech}</h3>

      {meaning.definitions?.map((def, i) => (
        <div key={i}>
          <p className='definition'>
            <strong>Definition:</strong> {def.definition}
          </p>

          {/* Only show Example if it exists */}
          <em>
            {def.example && (
              <p className='example'>
                <strong>Example:</strong> {def.example}
              </p>
            )}
          </em>
          {def.synonyms && def.synonyms.length > 0 && (
            <p>
              <strong>Synonyms:</strong> {def.synonyms.join(", ")}
            </p>
          )}
        </div>
      ))}
    </div>
  );
  
  }

export default Meaning