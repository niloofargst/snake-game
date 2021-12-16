import React from "react";
import "./Navstyle.css"
import snake from './pics/snake.gif';

const Navbar = () => {
    return (
        <nav className="nav-wraper lighten-2">
            <div className="container">
                <a href="#!" className="navClass">Snake Game</a>
                <img className="pic" src={snake} alt="snake" />
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;