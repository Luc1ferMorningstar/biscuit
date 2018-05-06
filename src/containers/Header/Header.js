import React from 'react';

import HeaderNavbar from '../../components/Header/Navbar/HeaderNavbar';
import dividerImage from '../../assets/images/divider-wave.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <HeaderNavbar />
      <img className="divider" src={dividerImage} alt=""/>
    </div>
  )
};

export default Header;
