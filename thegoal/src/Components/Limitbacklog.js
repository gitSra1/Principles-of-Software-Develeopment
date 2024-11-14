import React from 'react';
import './Limitbacklog.css'
const Limitbacklog = () => {
    return (
        <div>
            <span>Positive Modifier increases the value of Die when it rolled for the first time</span>
        <div className='limit-wip'>
            <span>Enter Limit : </span>
            <input id='limit-refinement' type='text'></input>
        </div>
        </div>
    );
}

export default Limitbacklog;
