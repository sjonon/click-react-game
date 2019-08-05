import React from "react";
import "./style.css";

function ImageCard(props){
    return (
        <div className="image-container">
            <figure><img className="z-depth-3" id={props.animate} onClick={()=>props.imageClick(props.id)} src={props.imageUrl} alt={props.name}/></figure>
        </div>
    )
}

export default ImageCard;