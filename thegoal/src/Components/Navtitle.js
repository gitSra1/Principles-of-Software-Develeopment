import React from 'react';
import './Navtitle.css';
import naruto from './assets/gryffindor.png';
const Navtitle = () => {
    return (
        <div className='nav-title' id='navtitle' >
            <img className='imageanim' alt='gryff' id='image-anim' src={naruto}></img>
            <div>
             <h1>The Goal Game </h1>
             <h2>by Gryffindors</h2>
             </div>
        </div>
    );
}

export default Navtitle;
