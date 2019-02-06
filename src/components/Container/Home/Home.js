import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import styles from './Home.module.css'
import { Parallax, Background } from 'react-parallax'
import { Grid, Image, Transition } from 'semantic-ui-react'
import TravelGuides from './TravelGuides/TravelGuides'
import Lifestyle from './Lifestyle/Lifestyle'
import Logos from './Logos/Logos'
import WorkTogether from './WorkTogether/WorkTogether'
// import '../../../App.css'

export default class Home extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Route path='/' render={() =>
        <div className={styles['home-grid']}>
          <div className={styles['intro']}>
              I've written for several publications on travel, lifestyle, and real estate. My true passion lies in discovering new places and finding the best of what they have to offer.
          </div>
          <div className={styles['travel-pic']}>
          </div>
          <TravelGuides />
          <div className={styles['lifestyle-pic']}>
          </div>
          <Lifestyle />
          <Logos />
          <WorkTogether />
          <div className={styles['work-pic']}>
          </div>
        </div>
        }/>
    )
  }
}
