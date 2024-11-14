import React from 'react';
 import "./Positivemodifier.css"
 const Positivemodifier = () => {
     return (
         <div>
             <span>Positive Modifier increases the value of Die when it rolled for the first time</span>
         <div className='positive-modifier'>
             <span>Enter modifier value : </span>
             <input id='modifier' type='text'></input>
         </div>
         </div>
     );
    }
 export default Positivemodifier;

 

/* 
 import React, { useState } from 'react';
import "./Positivemodifier.css";
import Game from './Game';

const Positivemodifier = () => {
  var [modifierValue, setModifierValue] = useState(0);
  var [gameStarted, setGameStarted] = useState(false);

  const handlePlayClick = () => {
    setGameStarted(true);
  };

  const handleModifierChange = event => {
    setModifierValue(Number(event.target.value));
  };

  return (
    <div>
      {!gameStarted && (
        <div className='positive-modifier'>
          <span>Enter modifier value : </span>
          <input id='modifier' type='text' onChange={handleModifierChange}></input>
          <button id='set-button' onClick={handlePlayClick}>set Value</button>
        </div>
      )}
      {gameStarted && <Game modifierValue={modifierValue} />}
    </div>
  );
};

export default Positivemodifier;
  */



