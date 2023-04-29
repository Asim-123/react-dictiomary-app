import React, { useState } from 'react';
import './card.css';

const Card = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [meaning, setMeaning] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.title === "No Definitions Found") {
          setError("Word not found");
          setMeaning('');
        } else {
          const meaning = data[0].meanings[0].definitions[0].definition;
          setMeaning(meaning);
          setError('');
        }
      } catch (error) {
        console.error(error);
        setError('Error fetching data');
        setMeaning('');
      }
  };

  return (
    <div className="card-container">
      <form onSubmit={handleSubmit}>
        <input type="search" name="search" value={searchTerm.trim()} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      {error ? <h3>{error}</h3> : <h3>Meaning: {meaning}</h3>}
    </div>
  );
};

export default Card;
