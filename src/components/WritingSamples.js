import React, { Component } from 'react'
import { Transition, Segment, Header, List, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import ImageCarousel from './ImageCarousel'
import PorterSailSamples from './PorterSailSamples'
import 'pure-react-carousel/dist/react-carousel.es.css'
import '../App.css'

export default class WritingSamples extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Route path='/writing_samples' render={() =>
        <Transition visible={visible} animation='fade' duration={800}>
          <div className='samples-container'>
            <div className='samples-text'>
              <h1 style={{fontFamily: 'Comfortaa'}}>Here are some writing samples</h1>
              <h2 style={{fontFamily: 'Comfortaa'}}>Porter & Sail</h2>
              <PorterSailSamples />
            </div>
          </div>
        </Transition>
      }/>
    )
  }
}
