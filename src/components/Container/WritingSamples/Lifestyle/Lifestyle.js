import React, { Component } from 'react'
import { Transition, Segment, Header, List, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import styles from '../WritingSamples.module.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Buzzfeed from './Buzzfeed/Buzzfeed'
import JerusalemPost from './JerusalemPost/JerusalemPost'
import FabFitFun from './FabFitFun/FabFitFun'

export default class Lifestyle extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Route path='/lifestyle' render={() =>
        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['samples-container']}>
            <div className={styles['samples-text']}>
              <h1 style={{fontFamily: 'Comfortaa'}}>Here are some Lifestyle writing samples:</h1>
              <h2 style={{fontFamily: 'Comfortaa'}}>Buzzfeed</h2>
              <Buzzfeed />
              <h2 style={{fontFamily: 'Comfortaa'}}>JerusalemPost</h2>
              <JerusalemPost />
              <h2 style={{fontFamily: 'Comfortaa'}}>FabFitFun</h2>
              <FabFitFun />
            </div>
          </div>
        </Transition>
      }/>
    )
  }
}
