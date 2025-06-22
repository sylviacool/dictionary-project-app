import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import './Phonetics.css'; 


const Phonetics = ({ phonetic }) => {
  return (
    <div className="Phonetics d-flex align-items-center gap-2 mb-2">
      {phonetic.text && (
        <span className="fw-bold me-2">
          Phonetic: <span className="fw-normal">{phonetic.text}</span>
        </span>
      )}
      {phonetic.audio && phonetic.audio !== "" && (
        <FontAwesomeIcon
          icon={faVolumeUp}
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const audio = new Audio(phonetic.audio);
            audio.play();
          }}
        />
      )}
    </div>
  );
};


export default Phonetics