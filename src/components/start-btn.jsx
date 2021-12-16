import React from "react";
import "./buttonStyle.css"
const ButtonStart = (props) => {

    return (
        <button className="buttonStart btn btn-dark"
            onClick={props.start}>Start Game
        </button>
    );
}

export default ButtonStart;