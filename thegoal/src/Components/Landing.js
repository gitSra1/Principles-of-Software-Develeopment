import React from 'react';
import "./Landing.css";
import Navtitle from './Navtitle';
import { useNavigate } from 'react-router-dom';
import "./assets/harry.png"

const Landing = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/instructions');
    };

    return (
        <div className='landing'>
            <Navtitle />
            <p id='landing-p'>The goal game is a Conceptual game which expresses the concept of understanding Work in Progress</p>
            <form>
                <input type='text' id='nick-name' placeholder='Pick A Nick Name'></input>
            </form>
            <button id='instructions' onClick={handleClick}> Instructions</button>
            
        </div>
    );
}

export default Landing;
