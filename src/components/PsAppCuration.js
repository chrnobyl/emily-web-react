import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import ImageCarousel from './ImageCarousel'
import '../App.css'

const PsAppCuration = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Modal trigger={<a>Poznan App Curation</a>} basic>
          <Header content='Poznan App Curation' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
    </List>
  )
}

export default PsAppCuration
