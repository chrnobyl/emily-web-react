import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import '../../../../App.css'

const PsFeatureGuides = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Modal trigger={<a>Lisbon: The Best of the Best</a>} basic>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Gdansk: The 50 Hour Guide</a>} basic>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Paris: Hotel Neighborhood Guide</a>} basic>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Stockholm: Fika Neighborhood Guide</a>} basic>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Phuket: Private Paradise</a>} basic>
          <Header content='Lisbon: The Best of the Best' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
    </List>
  )
}

export default PsFeatureGuides
