import React, { Component } from 'react'
import { Transition } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import styles from '../WritingSamples.module.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Buzzfeed from './Buzzfeed/Buzzfeed'
import JerusalemPost from './JerusalemPost/JerusalemPost'
import FabFitFun from './FabFitFun/FabFitFun'
import Redfin from './Redfin/Redfin'

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
              <h2 className={styles['header']} onClick={()=> window.open('https://www.buzzfeed.com/efh45', '_blank')}>Buzzfeed</h2>
              <Buzzfeed />
              <h2 style={{fontFamily: 'Comfortaa'}}>Jerusalem Post</h2>
              <JerusalemPost />
              <h2 className={styles['header']} onClick={()=> window.open('https://fabfitfun.com/magazine/author/emily-hochberggmail-com/', '_blank')}>FabFitFun</h2>
              <FabFitFun />
              <h2 className={styles['header']} onClick={()=> window.open('https://www.redfin.com/blog/author/emily-hochbergredfin-com', '_blank')}>Redfin</h2>
              <Redfin />
            </div>
          </div>
        </Transition>
      }/>
    )
  }
}
