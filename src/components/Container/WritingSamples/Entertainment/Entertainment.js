import React, { Component } from 'react'
import { Transition, Segment, Header, List, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import styles from '../WritingSamples.module.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import FeatureGuides from '../FeatureGuides/FeatureGuides'
import PhotoEssays from '../PhotoEssays/PhotoEssays'
import AppCuration from '../AppCuration/AppCuration'
import VenueWriteUps from '../VenueWriteUps/VenueWriteUps'
import Interviews from '../Interviews/Interviews'
import SecretEscapes from '../SecretEscapes/SecretEscapes'

export default class Entertainment extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Route path='/entertainment' render={() =>
        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['samples-container']}>
            <div className={styles['samples-text']}>
              <h1 style={{fontFamily: 'Comfortaa'}}>Here are some writing samples</h1>
              <h2 style={{fontFamily: 'Comfortaa'}}>Porter & Sail</h2>
              <h2>Hotel Photo Gallery Essays</h2>
              <PhotoEssays />
              <h2>Feature Guides</h2>
              <FeatureGuides />
              <h2>App Curation</h2>
              <AppCuration />
              <h2>Venue Write Ups</h2>
              <VenueWriteUps />
              <h2>Interviews</h2>
              <Interviews />
              <h2 style={{fontFamily: 'Comfortaa'}}>Secret Escapes</h2>
              <SecretEscapes />
            </div>
          </div>
        </Transition>
      }/>
    )
  }
}