import React from "react";
import "./style.css";

function Wrapper(props){
        return <div className="wrapper">
        <div className="container instructions">
        <p>Click on a picture to start the game.  Keep clicking on pictures but don't click on the same picture twice of you'll lose! </p>
        <div className="divider"></div>
        <div className="row">
        <div className="col s6">Score: {props.count}</div>
        <div className="col s6">Top Score: {props.top}</div>
        <div className="divider"></div>
        </div>
        <div className="row">{props.guesses}</div>
        </div>
        {props.children}
        
        </div>
    }

export default Wrapper