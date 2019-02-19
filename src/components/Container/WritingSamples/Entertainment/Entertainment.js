import React, { Component } from 'react'
import { Transition } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
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
              <p>Here are some Entertainment writing samples:</p>
              <p className={styles['header']} onClick={()=> window.open('https://es.xfinity.com/sdmy/blogs/tv/author/emilyhochberg/page/1/')}>Xfinity</p>
              <Xfinity />
              <p className={styles['header']} onClick={()=> window.open('http://www.mtv.com/news/author/emilyhochberg/')}>MTV</p>
              <Mtv />
            </div>
          </div>
        </Transition>
      }/>
    )
  }
}
