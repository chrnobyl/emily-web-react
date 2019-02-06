import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import VenueWriteUpsCarousel from './VenueWriteUpsCarousel/VenueWriteUpsCarousel'
import '../../../../App.css'

const VenueWriteUps = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Modal trigger={<a>Paris - Le Richer</a>} basic>
          <Header content='Paris - Le Richer' />
          <Modal.Content>
            <VenueWriteUpsCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Poznan - Weranda Caffe</a>} basic>
          <Header content='Poznan - Weranda Caffe' />
          <Modal.Content>
            <VenueWriteUpsCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
    </List>
  )
}

export default VenueWriteUps
