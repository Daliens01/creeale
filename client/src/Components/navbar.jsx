import React from 'react'
import Ai from "../assets/AI.png"
const navbar = () => {
    return (
        <nav>
            <img src={Ai}></img>
            <h1>Home</h1>

            <a href='/designs'>Login</a>
        </nav>
    );
}

export default navbar;