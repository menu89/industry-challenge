import React from 'react';
import placeholder from '../../../assets/images/placeholder.jpg'
import './BoardImage.scss';

const BoardImage = () => {
  return (
    <div className='bi'>
      <img className='bi__image' src={placeholder} alt="image" />
      <img className='bi__image' src={placeholder} alt="image" />
      <img className='bi__image' src={placeholder} alt="image" />
      <img className='bi__image' src={placeholder} alt="image" />
    </div>
  );
};

export default BoardImage;