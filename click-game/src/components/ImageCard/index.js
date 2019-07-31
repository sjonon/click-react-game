import React from "react";
import "./style.css";

function ImageCard(props){
    return (
        <div className="image-container">
            <img onClick={()=>props.imageClick(props.id)} src={props.imageUrl} alt={props.name}/>
        </div>
    )
}

export default ImageCard;