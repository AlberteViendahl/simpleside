"use client";

import React, { useEffect, useState } from 'react';

// Definerer Dropdown-komponenten, der viser en liste af tags og håndterer valget af tag.
const Dropdown = ({ onSelectTag }) => {
  const [tags, setTags] = useState([]);

  // useEffect bruges til at hente data (tags) fra en ekstern API, når komponenten bliver vist.
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        // Henter det første tag fra hvert produkt i API'et.
        const firstTags = data.products.map(product => product.tags[0]);

         // Fjerner gentagelser af kategorier fra listen af tags, så hvert tag kun vises én gang.
        const uniqueTags = Array.from(new Set(firstTags));
        setTags(uniqueTags);
      } catch (error) {
        // Hvis der er en fejl, logges den til konsollen.
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []); // Tomt array betyder, at denne funktion kun vises én gang

  return (
    <div>
      <select
        name="category"
        id="category-select"
        onChange={(e) => onSelectTag(e.target.value)}
        className="bg-lightblue rounded-15 p-2 cursor-pointer text-background ml-5 mt-5"
      >
        <option value="">Alle kategorier</option>
        {tags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
