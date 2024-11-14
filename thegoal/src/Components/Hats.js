

import React from 'react';
import './Hats.css';

const Hats = ({id, title, value }) => {
  return (
    <div className='hats-div' id={id}>
      <h2>{title}</h2>
      <div className='hat-value'>
        <span id='val-text'>{value}</span>
      </div>
    </div>
  );
}

export default Hats;
 


