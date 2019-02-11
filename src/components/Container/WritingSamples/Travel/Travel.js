import React, { Component } from 'react'
import { Transition } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import styles from '../WritingSamples.module.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import PorterSail from './PorterSail/PorterSail'
import SecretEscapes from './SecretEscapes/SecretEscapes'

export default class Travel extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Route path='/travel' render={() =>
        <Transition visible={visible} animation='fade' duration={800}>
        <div className={styles['samples-container']}>
          <div className={styles['samples-text']}>
            <h1 style={{fontFamily: 'Comfortaa'}}>Here are some writing samples</h1>
            <h2 style={{fontFamily: 'Comfortaa'}}>Porter & Sail</h2>
            <PorterSail />
            <h2 style={{fontFamily: 'Comfortaa'}}>Secret Escapes</h2>
            <SecretEscapes />
          </div>
        </div>
        </Transition>
      }/>
    )
  }
}
