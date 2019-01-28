import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import Bio from './Bio'
import './App.css';

const Home = (props) => {
  return (
    <Route path="/" render={() =>

      <div>
        <div className='intro'>
          I've written for several publications on travel, lifestyle, and real estate. My true passion lies in discovering new places and finding the best of what they have to offer.
        </div>
          <Parallax bgImage={require('./forest.jpg')} strength={700}>
            <Bio />
          </Parallax>
      </div>
      }/>
  )
}

export default Home
