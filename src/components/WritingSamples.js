import React, { Component } from 'react'
import { Transition, Segment, Header, List, Modal } from 'semantic-ui-react'
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
              <List size='medium' relaxed>
                <List.Header>Porter & Sail</List.Header>
                <List.Item>
                  <Modal trigger={<a>Lisbon: The Best of the Best</a>} basic centered>
                    <Header content='Lisbon: The Best of the Best' />
                    <Modal.Content>
                      <ImageCarousel className='carousel'/>
                    </Modal.Content>
                  </Modal>
                </List.Item>
                <List.Item>
                  <Modal trigger={<a>Lisbon: The Best of the Best</a>} basic centered>
                    <Header content='Lisbon: The Best of the Best' />
                    <Modal.Content>
                      <ImageCarousel className='carousel'/>
                    </Modal.Content>
                  </Modal>
                </List.Item>
                <List.Item>
                  <Modal trigger={<a>Lisbon: The Best of the Best</a>} basic centered>
                    <Header content='Lisbon: The Best of the Best' />
                    <Modal.Content>
                      <ImageCarousel className='carousel'/>
                    </Modal.Content>
                  </Modal>
                </List.Item>
                <List.Item>
                  <Modal trigger={<a>Lisbon: The Best of the Best</a>} basic centered>
                    <Header content='Lisbon: The Best of the Best' />
                    <Modal.Content>
                      <ImageCarousel className='carousel'/>
                    </Modal.Content>
                  </Modal>
                </List.Item>
              </List>
            </div>
          </div>
        </Transition>
      }/>
    )
  }
}
