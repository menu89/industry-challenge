import React, { Component } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import './TopNav.scss';
import logo from '../../assets/logos/shutterstock.svg';

class TopNav extends Component {
  render() {
    return (
      <nav className='topnav'>
        <img className='topnav__logo' src={logo} alt="ShutterStock" />
        <h1 className="topnav__title">creator</h1>
        <h3 className='topnav__item topnav__item--current'>Creator</h3>
        <h3 className='topnav__item'>
          Projects
          <BsChevronDown />
        </h3>

        <h3 className='topnav__item'>
          Blog
          <BsChevronDown />
        </h3>

        <h3 className='topnav__item'>
          Community
          <BsChevronDown />
        </h3>

        <h3 className='topnav__item'>
          Tools
          <BsChevronDown />
        </h3>

        <h3 className='topnav__item'>
          Images
          <BsChevronDown />
        </h3>
      </nav>
    );
  }
}

export default TopNav;