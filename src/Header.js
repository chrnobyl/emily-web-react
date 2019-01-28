import React, { Component } from 'react';
import { Item, Icon } from 'semantic-ui-react'
import NavBar from './NavBar';
import './App.css';

const Header = (props) => {
  return (
    <div>
      <div className='icons'>
        <Icon onClick={()=> window.open('https://www.linkedin.com/in/emilyhochberg/', "_blank")} link name="linkedin" size="big" />
        <Icon onClick={()=> window.open("https://www.linkedin.com/in/chrisbuggelli/", "_blank")} link name="twitter" size="big" />
      </div>
      <div className='header'>
        <h1 className='nav'>Emily Hochberg</h1>
        <h2 className='nav'>Travel and Lifestyle Editor</h2>
      </div>
      <NavBar />
    </div>

  )
}

export default Header
