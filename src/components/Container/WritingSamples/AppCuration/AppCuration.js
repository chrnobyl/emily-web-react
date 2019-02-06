import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import AppCurationCarousel from './AppCurationCarousel/AppCurationCarousel'
import '../../../../App.css'

const AppCuration = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Modal trigger={<a>Poznan App Curation</a>} basic>
          <Header content='Poznan App Curation' />
          <Modal.Content>
            <AppCurationCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
    </List>
  )
}

export default AppCuration
