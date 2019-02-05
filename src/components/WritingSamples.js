import React, { Component } from 'react'
import { Transition, Segment, Header } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import ImageCarousel from './ImageCarousel'
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur at nibh nec placerat. In pharetra est nec quam cursus, nec malesuada turpis pulvinar. Aliquam mattis, ipsum quis fringilla ornare, orci ante accumsan neque, vel tempus mauris urna vitae ipsum. Suspendisse et fringilla velit, eu aliquet nibh. Suspendisse luctus turpis vitae nisi aliquet, quis dictum sem molestie. Sed eu enim ut urna finibus convallis in at enim. Aliquam eu nunc porttitor, pretium purus quis, congue lorem. Donec elementum ut risus a venenatis. Sed molestie facilisis nulla, quis fermentum dolor tempor et. Integer quis scelerisque leo, vitae luctus enim. Phasellus euismod suscipit fringilla. Suspendisse sed porttitor quam.
              </p>
            </div>
            <ImageCarousel className='carousel'/>
          </div>
        </Transition>
      }/>
    )
  }
}
