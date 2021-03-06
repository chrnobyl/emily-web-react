import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styles from './Home.module.css'
// import { Parallax, Background } from 'react-parallax'
import { Transition } from 'semantic-ui-react'
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
                I'm an experienced Lifestyle Editor with a demonstrated history of writing and editing content for about travel, culture, entertainment and style.
            </div>
          </Transition>

          <Transition visible={visible} animation='fade' duration={1200}>
            <div className={styles['travel-pic']}>
            </div>
          </Transition>

          <TravelGuides/>

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
