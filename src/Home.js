import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import { Grid, Image } from 'semantic-ui-react'
import TravelGuides from './TravelGuides'
import Lifestyle from './Lifestyle'
import Logos from './Logos'
import WorkTogether from './WorkTogether'
import './App.css';

const Home = (props) => {
  return (
    <Route path="/" render={() =>
      <div className='home-grid'>
        <div className='intro'>
            I've written for several publications on travel, lifestyle, and real estate. My true passion lies in discovering new places and finding the best of what they have to offer.
        </div>
        <div className='travel-pic'>
        </div>
        <TravelGuides />
        <div className='lifestyle-pic'>
        </div>
        <Lifestyle />
        <Logos />
        <div className='work-together'>
          <WorkTogether />
        </div>
        <div className='work-together-pic'>
        </div>
      </div>
      }/>
  )
}

export default Home
