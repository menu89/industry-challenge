import React from 'react';
import SingleBoardImage from '../SingleBoard/SingleBoardImage';
import './BoardImage.scss';

const BoardImage = ({boardsInformation}) => {
  return (
    <div className='bi'>
      {console.log(boardsInformation)}
      <SingleBoardImage oneBoard={boardsInformation[0]} />
      <SingleBoardImage oneBoard={boardsInformation[1]} />
      <SingleBoardImage oneBoard={boardsInformation[2]} />
      <SingleBoardImage oneBoard={boardsInformation[3]} />      
    </div>
  );
};

export default BoardImage;