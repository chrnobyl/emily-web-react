import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import { Grid } from 'semantic-ui-react'
import Bio from './Bio'
import TravelGuides from './TravelGuides'
import Lifestyle from './Lifestyle'
import './App.css';

const Home = (props) => {
  return (
    <Route path="/" render={() =>

      <div>
        <div className='intro'>
          I've written for several publications on travel, lifestyle, and real estate. My true passion lies in discovering new places and finding the best of what they have to offer.
        </div>
        <div className='mid'>
        <TravelGuides />
        <Lifestyle />
        </div>
        <div className='postmid'>
        <Parallax bgImage={require('./forest.jpg')} strength={700}>
          <Bio />
        </Parallax>
        </div>
      </div>
      }/>
  )
}

export default Home
