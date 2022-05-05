import React from "react";
import audio from './../assets/ElGhazala.mp3';

class AudioTest extends React.Component{

  playAudio = () => {
    new Audio(audio).play();
  }

  render() {
    return (
        <div>
          <button onClick={this.playAudio}className='btn btn-primary'>دوس هنا</button>
        </div>
    );
  }
}

export default AudioTest;