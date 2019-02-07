import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import styles from './Home.module.css'
import { Parallax, Background } from 'react-parallax'
import { Grid, Image, Transition } from 'semantic-ui-react'
import TravelGuides from './TravelGuides/TravelGuides'
import Lifestyle from './Lifestyle/Lifestyle'
import Logos from './Logos/Logos'
import WorkTogether from './WorkTogether/WorkTogether'

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
          <Transition visible={visible} animation='fade' duration={800}>
            <div className={styles['intro']}>
                I've written for several publications on travel, lifestyle, and real estate. My true passion lies in discovering new places and finding the best of what they have to offer.
            </div>
          </Transition>

          <Transition visible={visible} animation='fade' duration={1200}>
            <div className={styles['travel-pic']}>
            </div>
          </Transition>

          <TravelGuides />

          <Transition visible={visible} animation='fade' duration={1200}>
            <div className={styles['lifestyle-pic']}>
            </div>
          </Transition>

          <Lifestyle />

          <Logos />

          <WorkTogether />

          <Transition visible={visible} animation='fade' duration={1200}>
            <div className={styles['work-pic']}>
            </div>
          </Transition>
        </div>
      }/>
    )
  }
}
