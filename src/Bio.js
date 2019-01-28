import React, { Component } from 'react'
// import { Grid, Menu, Segment, Button, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

const Bio = (props) => {
  return (
    <Route path="/" render={() =>
      <div className='block'>
        <p>
          I'm a travel and lifestyle editor who has written for a bunch of stuff.
        </p>
      </div>
      }/>

  )
}

export default Bio
