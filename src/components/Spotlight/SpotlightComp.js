import React, { Component } from 'react';
import { BiCategory } from 'react-icons/bi';
import placeholder from '../../assets/images/placeholder.jpg';
import './SpotlightComp.scss';

const imageAddress = 'http://localhost:8080/shutterstock'


class SpotlightComp extends Component {
  render() {
    const {id, mood, category, mainImage, images} = this.props.boardsData
    return (
      <section className='spc'>
        <h2 className='spc__title'>Spotlight</h2>
        <div className='spc__creator-wrapper'>
          <img className='spc__creator-avatar' src={`${imageAddress}${mainImage}`} alt="desc" />
          <div className='spc__copy-container'>
            <h1 className='spc__creator-title'>Celestial</h1>
            <p className='spc__text'>Photographer: James</p>
            <p className='spc__text'>Location: Vancouver BC, CA</p>
            <p className='spc__text'>Dimension: 1000px x 800px</p>
            <p className='spc__text'>Date: May 2022</p>
          </div>
          <div className='spc__gallery'>
            <img className='spc__image' alt='desc' src={`${imageAddress}${images[0]}`} />
            <img className='spc__image' alt='desc' src={`${imageAddress}${images[1]}`} />
            <img className='spc__image' alt='desc' src={`${imageAddress}${images[2]}`} />
            <img className='spc__image' alt='desc' src={`${imageAddress}${images[3]}`} />
          </div>
        </div>
      </section>
    );
  }
}

export default SpotlightComp;