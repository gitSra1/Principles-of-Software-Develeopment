import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Instructions.css';
import hermione from './assets/hermione.png'
const Instructions = () => {
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate('/game');
    };

    return (
        <div className='margins'>
            <div className='opening'><h1>Hello {document.getElementById('nick-name').value} </h1> 
            <img id='hermione' alt='hermione' src={hermione}></img>
            </div>
            <h3 id='Muggle' className='typing'>Hello Muggles! This game is designed to understand WIP and increase the efficiency of Work document
             <br/>Select the mode of the game from the dropdown listed  Click on Dice to roll and to display the value.
             <br/> Repeat the same process for 10 days to generate the score. 
             To complete one single day, user has to roll the die for 5 times.
             <br/> Use the simulate button to automatically generate the score for 10 days.</h3>
            <button id='Start-Game' onClick={handleClick1}>Start Game</button>
        </div>
    );
}

export default Instructions;
