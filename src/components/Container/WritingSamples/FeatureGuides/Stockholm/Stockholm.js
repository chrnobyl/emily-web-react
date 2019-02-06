import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../../ImageCarousel'

const stockholmImages = []

const Stockholm = (props) => {
  return (
    <Modal trigger={<a>Stockholm: Fika Neighborhood Guide</a>} basic>
      <Header content='Stockholm: Fika Neighborhood Guide' />
      <Modal.Content>
        <ImageCarousel className='carousel' images={stockholmImages} location={'./FeatureGuides/Stockholm/images'}/>
      </Modal.Content>
    </Modal>
  )
}

export default Stockholm
