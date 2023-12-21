import React, { useState, useEffect } from 'react';

const NumberDisplay = ({ match }) => {
  const [number, setNumber] = useState();

  useEffect(() => {
    setNumber(match.number);
  }, [match.number]);

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};

export default NumberDisplay;