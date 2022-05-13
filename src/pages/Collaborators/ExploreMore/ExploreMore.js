import React from 'react';
import './ExploreMore.scss';
import placeholder from '../../../assets/images/placeholder.jpg';

const ExploreMore = () => {
  return (
    <div className='em'>
      <h2 className='em__title'>Images</h2>
      <div className='em__wrapper'>
        <img className="em__image" src={placeholder} alt="image" />
        <img className="em__image" src={placeholder} alt="image" />
        <img className="em__image" src={placeholder} alt="image" />
        <img className="em__image" src={placeholder} alt="image" />
      </div>
    </div>
  );
};

export default ExploreMore;