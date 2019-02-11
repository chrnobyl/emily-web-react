import React, { Component } from 'react'
import { Transition, Segment, Header, List, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import styles from '../WritingSamples.module.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Xfinity from './Xfinity/Xfinity'
import Mtv from './Mtv/Mtv'

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
              <h1 style={{fontFamily: 'Comfortaa'}}>Here are some Entertainment writing samples</h1>
              <h2 className={styles['header']} onClick={()=> window.open('https://es.xfinity.com/sdmy/blogs/tv/author/emilyhochberg/page/1/')}>Xfinity</h2>
              <Xfinity />
              <h2 className={styles['header']} onClick={()=> window.open('http://www.mtv.com/news/author/emilyhochberg/')}>MTV</h2>
              <Mtv />
            </div>
          </div>
        </Transition>
      }/>
    )
  }
}
