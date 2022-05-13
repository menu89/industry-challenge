import React from 'react';
import BoardImage from './BoardImage/BoardImage.js'
import './Board.scss'

const Board = () => {
  return (
    <div className="board">
      <div className='board__copy-container'>
        <h2 className="board__title">Your Board</h2>
        <h3 className='board__item board__item--current'>images</h3>
        <h3 className='board__item'>3d design</h3>
        <h3 className='board__item'>digital art</h3>
        <h3 className='board__item'>music</h3>
      </div>
      <div className='board__image-container'>
        <BoardImage />
      </div>
    </div>
  );
};

export default Board;