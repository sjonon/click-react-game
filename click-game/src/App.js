import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import ImageCard from "./components/ImageCard";
import images from "./images.json"

class App extends React.Component {

  state ={
    count: 0,
    countTop: 0,
    images
  }

  imageClick = id => {
    let score = this.state.count
    let lose = false
    const updatedImages = this.state.images.map(image => {
      const imageClone = {...image}
      if(id === image.id){
        // console.log(imageClone)
        if(imageClone.clicked === false){
          imageClone.clicked = true;
          score++
        }else if (imageClone.clicked === true){
          lose = true;
        }
      }
      return imageClone
    })
    console.log(updatedImages)
    console.log(score)
    if(lose === false){
    this.setState({images: updatedImages, count: score})
    }else {
      console.log("game has been reset")
      this.gameReset()
    }
  }

  gameReset = () => {
  //reset count to 0, compare count to countTop and update high score, update image array - all in one this.setState
  //variable for images
  let score = this.state.count;
  let topScore = this.state.countTop;
  const resetImages = this.state.images.map(image => {
    const imageClone = {...image, clicked: false};
    return imageClone
  })
  if(score >= topScore){
    this.setState({images: resetImages, count: 0})
  }else{
    this.setState({images: resetImages, count: 0, countTop: score})
  }

}

  render (){
    return(
      <Wrapper>
      {this.state.images.map(image => (
        <ImageCard
          clicked={this.clicked}
          id={image.id}
          key={image.id}
          name={image.name}
          imageUrl={image.image}
          imageClick={this.imageClick}
          />
        )
      )}
      </Wrapper>
    );
  }
}

export default App;
