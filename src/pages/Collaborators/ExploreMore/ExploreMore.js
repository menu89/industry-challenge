import React from 'react';
import './ExploreMore.scss';

const imageAddress = 'http://localhost:8080/shutterstock'


const ExploreMore = ({title, list}) => {
  return (
    <div className='em'>
      <h2 className='em__title'>{title}</h2>
      <div className='em__wrapper'>
        <img className="em__image" src={`${imageAddress}${list[0]}`} alt="desc" />
        <img className="em__image" src={`${imageAddress}${list[1]}`} alt="desc" />
        <img className="em__image" src={`${imageAddress}${list[2]}`} alt="desc" />
        <img className="em__image" src={`${imageAddress}${list[3]}`} alt="desc" />
      </div>
    </div>
  );
};

export default ExploreMore;