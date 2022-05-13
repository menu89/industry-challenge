import React, { Component } from 'react';
import { FaRegStar, FaRegStarHalf } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import './SideNav.scss';
import avatar from '../../assets/images/avatar.jpg';

class SideNav extends Component {
  render() {
    return (
      <nav className='sidenav'>
        <img className='sidenav__avatar' src={avatar} alt="avatar" />
        <h2 className='sidenav__username'>Tyler Smith</h2>
        <h3 className='sidenav__copy'>Your Profile</h3>
        <h4 className='sidenav__copy'>CONTRIBUTOR</h4>
        <h4 className='sidenav__copy'>EXPERIENCE: TOP SELLER</h4>
        <h4 className='sidenav__copy'>REVIEWS: 4.5/5</h4>
        <div>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStarHalf />
        </div>
        <h4>PHOTOGRAPHER</h4>
        <BiArrowBack className='sidenav__back-arrow'/>
        <div className='sidenav__button-wrapper'>
          <p className='sidenav__button'>Log Off</p>
          <p className='sidenav__button'>Settings</p>
        </div>
      </nav>
    );
  }
}

export default SideNav;