import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import ImageCarousel from './ImageCarousel'
import '../App.css'

const PorterSailSamples = (props) => {
  return (
    <List size='medium' relaxed>
      <h2>Feature Guides</h2>
      <List.Item>
        <Modal trigger={<a>Lisbon: The Best of the Best</a>} basic centered>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Gdansk: The 50 Hour Guide</a>} basic centered>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Paris: Hotel Neighborhood Guide</a>} basic centered>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Stockholm: Fika Neighborhood Guide</a>} basic centered>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Phuket: Private Paradise</a>} basic centered>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
    </List>
  )
}

export default PorterSailSamples
