import React, { Component } from 'react';
import { Link } from 'semantic-ui-react'
import NavBar from './NavBar';
import './App.css';

const Header = (props) => {
  return (
    <div>
      <h1>Emily Hochberg</h1>
      <NavBar />
    </div>

  )
}

export default Header
