import React from "react";
import "./Score.css"
import coin from "../pics/coin.gif";

const Score = (props) => {

    return (
        <div className="scoreWrap">

            <p className="score"> <img className="picC" src={coin} alt="coin" /> Your score: {props.score}</p>

        </div>
    );
}

export default Score;