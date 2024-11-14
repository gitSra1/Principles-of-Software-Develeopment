import React, { useState } from 'react';
import Dice from 'react-dice-roll';
import './Die.css';

const Die = ({ onRoll }) => {
  // eslint-disable-next-line
  const [diceValue, setDiceValue] = useState(null);

  const handleRoll = value => {
    setDiceValue(value);
    onRoll(value);
  };

  return (
    <div className="dice-roll" data-testid="die" >
      <Dice className="diecss" size={130} sides={6} onRoll={handleRoll} />
    </div>
  );
};

export default Die;
