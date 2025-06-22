import React, { useState, useEffect } from "react";
import axios from "axios";
import "./images.css";

const Images = ({ keyword }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!keyword) return;
    const apiKey = "DMBz8NzwhOPJsVKDj8Cl6Oq3v3LsFJ3ZAdavq16CEaJFNcuv8txWX4cv"; 
    const url = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    axios.get(url, { headers: { Authorization: apiKey } }).then((response) => {
      setPhotos(response.data.photos);
    });
  }, [keyword]);

  if (!photos.length) return null;

  return (
    <section>
      <h3>Images</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {photos.map((photo) => (
          <a
            href={photo.src.original}
            target="_blank"
            rel="noopener noreferrer"
            key={photo.id}
          >
            <img
              src={photo.src.medium}
              alt={photo.alt}
              style={{ width: "18rem", borderRadius: "0.5rem" }}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Images;


