import React from 'react';
import './Header.css';
import logo from '../../assets/netflix-logo.png';
import avatar from '../../assets/avatar-1.jpg';



export default () => {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src={logo} alt="Netflix Logo" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={avatar} alt="Usuário"/>
        </a>
      </div>
    </header>
  )
}