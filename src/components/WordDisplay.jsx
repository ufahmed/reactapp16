
import React, { useState, useEffect } from 'react';

const WordDisplay = ({ match }) => {
  const [word, setWord] = useState('');

  useEffect(() => {
    setWord(word);
  }, [word]);

  return (
    <div>
      <h1>{word}</h1>
    </div>
  );
};

export default WordDisplay;