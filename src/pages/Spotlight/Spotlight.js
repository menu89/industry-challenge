import React, { Component } from 'react';
import SpotlightComp from '../../components/Spotlight/SpotlightComp';
import imageData from '../../data/moodboards.json';
import Board from '../../components/Board/Board';


class Spotlight extends Component {
  render() {
    return (
      <div>
        <SpotlightComp />
        <Board name="Your Boards" boardsData={imageData.filter(oneBoard => {return oneBoard.category === "personal"})} />
        <Board name="Collaborative Boards" boardsData={imageData.filter(oneBoard => {return oneBoard.category === "collaborative"})}/>
        <Board name="Recommended Boards" boardsData={imageData.filter(oneBoard => {return oneBoard.category === "recommended"})}/>
      </div>
    );
  }
}

export default Spotlight;