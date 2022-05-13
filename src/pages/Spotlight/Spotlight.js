import React, { Component } from 'react';
import SpotlightComp from '../../components/Spotlight/SpotlightComp';
import Board from '../../components/Board/Board';


class Spotlight extends Component {
  render() {
    return (
      <div>
        <SpotlightComp />
        <Board />
        <Board />
        <Board />
      </div>
    );
  }
}

export default Spotlight;