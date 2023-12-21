import React from 'react';
import { useParams } from 'react-router-dom';

const StyledWordDisplay = () => {
  const { word, color, background } = useParams();

  const styles = {
    color: color || 'blue',
    backgroundColor: background || 'red',
    padding: '10px',
    display: 'inline-block',
  };

  return (
    <div style={styles}>
      <h1>{word}</h1>
    </div>
  );
};

export default StyledWordDisplay;