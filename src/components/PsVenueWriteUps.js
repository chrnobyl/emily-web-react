import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import ImageCarousel from './ImageCarousel'
import '../App.css'

const PsVenueWriteUps = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Modal trigger={<a>Paris - Le Richer</a>} basic>
          <Header content='Paris - Le Richer' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Poznan - Weranda Caffe</a>} basic>
          <Header content='Poznan - Weranda Caffe' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
    </List>
  )
}

export default PsVenueWriteUps
