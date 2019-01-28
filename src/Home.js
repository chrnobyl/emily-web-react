import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import Bio from './Bio'
import './App.css';

const Home = (props) => {
  return (
    <Route path="/" render={() =>
      <div className='block'>
        <div className='intro'>
          I've written city guides as well as real estate stuff.
        </div>
        <Parallax bgImage={require('./forest.jpg')} strength={500}>
          <Bio />
        </Parallax>
      </div>
      }/>
  )
}

export default Home
