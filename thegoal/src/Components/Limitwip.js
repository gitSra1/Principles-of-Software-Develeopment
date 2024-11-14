import React from 'react';
import "./Limitwip.css"
const Limitwip = () => {
    return (
        <div>
            <span>Positive Modifier increases the value of Die when it rolled for the first time</span>
        <div className='limit-wip'>
            <span>Enter Limit : </span>
            <input id='limitonwip' type='text'></input>
        </div>
        </div>
    );
}

export default Limitwip;
