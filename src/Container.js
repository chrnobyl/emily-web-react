import React, { Component } from 'react'
// import { Grid, Menu, Segment, Button, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import Bio from './Bio'
import WritingSamples from './WritingSamples'
import Contact from './Contact'
import './App.css';

const Container = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path = '/' render= {() =><Bio />}/>
        <Route exact path = '/writing_samples' render= {() =><WritingSamples />}/>
        <Route exact path = '/contact' render= {() =><Contact />}/>
      </Switch>
      <h6>© Chris Buggelli Productions, Inc.</h6>
    </div>
  )
}

export default Container
