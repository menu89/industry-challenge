import React from 'react';
import placeholder from '../../../assets/images/placeholder.jpg'
import './BoardImage.scss';

const BoardImage = () => {
  return (
    <div className='bi'>
      <div className='bi__wrapper'>
        <img className='bi__image' src={placeholder} alt="image" />
        <h3 className='bi__text'>Placeholder</h3>
      </div>

      <div className='bi__wrapper'>
        <img className='bi__image' src={placeholder} alt="image" />
        <h3 className='bi__text'>Placeholder</h3>
      </div>

      <div className='bi__wrapper'>
        <img className='bi__image' src={placeholder} alt="image" />
        <h3 className='bi__text'>Placeholder</h3>
      </div>

      <div className='bi__wrapper'>
        <img className='bi__image' src={placeholder} alt="image" />
        <h3 className='bi__text'>Placeholder</h3>
      </div>
      
    </div>
  );
};

export default BoardImage;