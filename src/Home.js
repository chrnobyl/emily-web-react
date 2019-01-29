import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import { Grid, Image } from 'semantic-ui-react'
import TravelGuides from './TravelGuides'
import Lifestyle from './Lifestyle'
import './App.css';

const Home = (props) => {
  return (
    <Route path="/" render={() =>
      <Grid stackable style={{height: '100vh'}}>
        <Grid.Row style={{padding: '0', paddingBottom: '0', paddingTop: '1rem'}}>
          <Grid.Column className='intro' textAlign='center'>
            I've written for several publications on travel, lifestyle, and real estate. My true passion lies in discovering new places and finding the best of what they have to offer.
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className='noPadding'>
          <Grid.Column width={4}>
            <Image src='ramen.jpg' alt='ramen'/>
          </Grid.Column>
          <Grid.Column width={4}>
            <TravelGuides />
          </Grid.Column>
          <Grid.Column width={4}>
            <Image src='westlight.jpg' alt='ramen'/>
          </Grid.Column>
          <Grid.Column width={4}>
            <Lifestyle />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={9}>

          </Grid.Column>
          <Grid.Column width={7}>

          </Grid.Column>
        </Grid.Row>
      </Grid>
      }/>
  )
}

export default Home
