import React, { Component } from 'react';
import { AiFillHeart, AiOutlineShareAlt, AiOutlineSave, AiOutlineComment } from 'react-icons/ai';
import './Collaborators.scss';
import placeholder from '../../assets/images/placeholder.jpg';
import ExploreMore from './ExploreMore/ExploreMore.js'
import imageData from '../../data/moodboards.json';
import { Redirect } from 'react-router';

const findObj = imageData.find(obj => obj.mood === "Evening Fire")
const imageAddress = 'http://localhost:8080/shutterstock'


class Collaborators extends Component {
  state = {
    redirect: false
  }

  handleClick = () => {
    this.setState({
      redirect:true
    })
  }

  render() {
    return (
      <>
      { this.state.redirect ? <Redirect to="/" /> : null}
      <div className='collab'>
        <h2>Collaborators</h2>
        <p className='collab__created-text'>
          Board Created on: May 27, 2022
        </p>

        <div className='collab__avatar-container'>
          <span className='collab__avatar collab__avatar--user' src='/' alt='collaborator avatar'/>
          <span className='collab__avatar collab__avatar--red' src='/' alt='collaborator avatar'/>
          <span className='collab__avatar collab__avatar--yellow' src='/' alt='collaborator avatar'/>
          <span className='collab__avatar collab__avatar--blue' src='/' alt='collaborator avatar'/>

        </div>

        <h2 onClick={this.handleClick}>Moodboard</h2>
        <h1 className='collab__mb-header'>Evening Fire</h1>
        <div className='collab__mb-container'>
          <div className='collab__mb-image-container'>
            <img className='collab__mb-image' src={`${imageAddress}${findObj.mainImage}`} alt='desc' />
            <p className='collab__mb-image-label'>made with Jan</p>
          </div>
          <div className='collab__mb-content-container'>
            <div className='collab__mb-text-wrap'>
              <h3>Description</h3>
              <p className='collab__mb-text'>
                This board is inspired by warm summer nights, an open fire, <br />
                good conversation, and smores. 
              </p>
              <div>
                <div className='tag-container'>
                  <p className='tag'>Evening</p>
                  <p className='tag'>Bonfire</p>
                  <p className='tag'>Night</p>
                </div>
                <div className='tag-container'>
                  <p className='tag'>Beach</p>
                  <p className='tag'>Summer</p>
                  <p className='tag'>Stars</p>
                </div>
              </div>
              

            </div>
            <div className='collab__mb-text-wrap'>
              <h3>Collaborators</h3>
              <div className='collab__mb-group'>
                <p className='collab__mb-text'>
                  Tyler Smith: Photographer
                </p>
                <p className='collab__mb-text'>
                  Jan Lam: Videographer
                </p>
                <p className='collab__mb-text'>
                  Alex Lee: Producer
                </p>
                <p className='collab__mb-text'>
                  Lancy Cooper: Photographer
                </p>
              </div>

              <div className='collab__mb-interaction-wrap'>
                <h4><AiFillHeart />510 Likes</h4>
                <h4><AiOutlineShareAlt />Shares</h4>
                <h4><AiOutlineSave />Saved</h4>
                <h4><AiOutlineComment />Comment</h4>
              </div>
            </div>
          </div>

        </div>

        <h1 className='collab__mb-header'>Explore more</h1>
        <ExploreMore title="Images" list={findObj.images} />
        <ExploreMore title="Video" list={findObj.video}/>
        <ExploreMore title="Music" list={findObj.music} />
      </div> 
      </>
    );
  }
}


export default Collaborators;