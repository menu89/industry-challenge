import React, { Component } from 'react';
import { FaRegStar, FaRegStarHalf } from 'react-icons/fa';
import './SideNav.scss';

class SideNav extends Component {
  render() {
    return (
      <nav className='sidenav'>
        <img className='sidenav__avatar' src="" alt="avatar" />
        <h2 className='sidenav__username'>Tyler Smith</h2>
        <h3>Your Profile</h3>
        <h4>CONTRIBUTOR</h4>
        <h4>EXPERIENCE: TOP SELLER</h4>
        <h4>REVIEWS: 4.5/5</h4>
        <div>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStarHalf />
        </div>
        <h4>PHOTOGRAPHER</h4>
        <div className='sidenav__button-wrapper'>
          <p className='sidenav__button'>Log Off</p>
          <p className='sidenav__button'>Settings</p>
        </div>
      </nav>
    );
  }
}

export default SideNav;