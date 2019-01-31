import React, { Component } from 'react';
import { Item, Icon } from 'semantic-ui-react'
import NavBar from './NavBar';
import './App.css';

const Header = (props) => {
  let style = {
    fontSize: 36
  }

  return (
    <div>
      <div className='icons'>
        <Icon onClick={()=> window.open('https://www.linkedin.com/in/emilyhochberg/', '_blank')} link name='linkedin' size='big' />
        <Icon onClick={()=> window.open('https://twitter.com/emily.hochberg', '_blank')} link name='twitter' size='big' />
      </div>
      <div className='header'>
        <h1 className='nav' style={style}>Emily Hochberg</h1>
        <h1 className='nav'>Writer | Editor | Content & Social Media Strategist</h1>
      </div>
      <NavBar />
    </div>
  )
}

export default Header
