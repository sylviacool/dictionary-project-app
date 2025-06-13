import React from 'react'
import Meaning from './Meaning';
import Phonetics from './Phonetics';

const Results = ({result}) => {
  if (result) {
    return (
      <div className="Results">
        <section>
          <h2>{result.word}</h2>
          {result.phonetics?.map((phonetic, idx) => (
            <div key={idx}>
              <Phonetics phonetic={phonetic} />
            </div>
          ))}
        </section>
        <section>
          {result.meanings?.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
            /*
  {meaning} here is a single object from the result.meanings array map function.
  we pass that meaning object as a prop to your Meaning component.
  The Meaning component then uses that object to display the part of speech,
  definitions, and examples. 
*/
          ))}
        </section>
      </div>
    );
  } else {
    return (
      <div className="Results">
        <h2>Enter a word to search</h2>
      </div>
    );
  }
        
   /* <div>
      <h2>{result.word}</h2>
      <p>Part of Speech: {result.meaning?.[0]?.partOfSpeech}</p>
      <p>Part of Speech: {result.partOfSpeech}</p>
      <p>Phonetic: {result.phonetic}</p>
      <p>Definition: {result.meaning?.[0]?.definitions?.[0]?.definition}</p>
      <p>Example: {result.meaning?.[0]?.definitions?.[0]?.example}</p>
    </div>
  );*/    
}

export default Results