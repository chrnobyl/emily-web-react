import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import WritingSamples from './WritingSamples'
import Contact from './Contact'
import './App.css';

const Container = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path = '/' render= {() =><Home />}/>
        <Route exact path = '/about' render= {() =><About />}/>
        <Route exact path = '/writing_samples' render= {() =><WritingSamples />}/>
        <Route exact path = '/contact' render= {() =><Contact />}/>
      </Switch>
    </div>
  )
}

export default Container
