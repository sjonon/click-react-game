import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar"
import images from "./images.json"

function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends React.Component {

  state ={
    count: 0,
    countTop: 0,
    images,
    guesses: "",
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
          score++;
        }else if (imageClone.clicked === true){
          lose = true;
        }
      }
      return imageClone
    })
    console.log(updatedImages)
    console.log(score)
    if(score === 12){
      this.setState({guesses: "You win! Click an image to play again."})
      this.gameReset();
    }
    if(lose === false){
    this.setState({images: updatedImages, count: score, guesses: "You guessed correctly!"})
    }else {
      console.log("game has been reset")
      this.gameReset()}
  }

  gameReset = () => {
    //reset count to 0, compare count to countTop and update high score, update image array - all in one this.setState
    //variable for images
    let score = this.state.count;
    let topScore = this.state.countTop;
    const resetImages = this.state.images.map(image => {
    const imageClone = {...image, clicked: false};
    return imageClone;
    })
  
    if(score === 12){
      this.setState({image: resetImages, countTop: 12, count: 0, guesses: "You win! Click to play again."});
    }else if(score > topScore){
      this.setState({images: resetImages, countTop: score, count: 0, guesses: "You already clicked that one. Try again!"})
    }else if (score < topScore) {
    this.setState({images: resetImages, count: 0, guesses: "You already clicked that one. Try again!"})
    }
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages });
  };

  render (){
    return(
      <div>
      <Navbar />
      <Wrapper count={this.state.count} top={this.state.countTop} guesses={this.state.guesses}>
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
      </div>
    );
  }
}

export default App;
