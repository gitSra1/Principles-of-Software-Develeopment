/* import React from 'react';
import './Gamedash.css'
const Gamedash = () => {
    return (
        <div className='gameDash'>
            <select id="Mode">
                <option value='Simple Mode'>Simple Mode</option>
                <option value='Limit on WIP'>Limit on WIP</option>
                <option value='Limit on Backlog'>Limit on Backlog</option>
                <option value='Positive Modifier'>Positive Modifier</option>
            </select>
            <p>Day:-</p>
        </div>
    );
}

export default Gamedash; */



import React, { useState } from 'react';
import Limitwip from './Limitwip';
import Limitbacklog from './Limitbacklog';
import Positivemodifier from './Positivemodifier';
import './Gamedash.css';

const Gamedash = () => {
  const [mode, setMode] = useState('Simple Mode');

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  let selectedComponent;
  switch (mode) {
    case 'Simple Mode':
      break;
    case 'Limit on WIP':
      selectedComponent = <Limitwip />;
      break;
    case 'Limit on Backlog':
      selectedComponent = <Limitbacklog />;
      break;
    case 'Positive Modifier':
      selectedComponent = <Positivemodifier />;
      break;
    default:
      selectedComponent = null;
  }

  return (
    <div className="gameDash">
      <select id="Mode" onChange={handleModeChange} defaultValue="Simple Mode">
        <option value="Simple Mode">Simple Mode</option>
        <option value="Limit on WIP">Limit on WIP</option>
        <option value="Limit on Backlog">Limit on Refinement</option>
        <option value="Positive Modifier">Positive Modifier</option>
      </select>
      {selectedComponent}
    </div>
  );
};

export default Gamedash;

