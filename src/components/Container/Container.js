import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import styles from './Container.module.css'
import Home from './Home/Home'
import About from './About/About'
import WritingSamples from './WritingSamples/WritingSamples'
import Contact from './Contact/Contact'

const Container = (props) => {
  return (
    <div className={styles['container']}>
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
