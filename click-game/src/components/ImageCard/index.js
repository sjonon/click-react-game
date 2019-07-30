import React from "react";

function ImageCard(props){
    return (
        <div className="image-container">
            <img src={props.src} alt={props.name}/>
        </div>
    )
}

export default ImageCard;