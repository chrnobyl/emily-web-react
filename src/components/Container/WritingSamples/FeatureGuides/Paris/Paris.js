import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../../ImageCarousel'

const parisImages = ['lisbon_1', 'lisbon_2', 'lisbon_3', 'lisbon_4', 'lisbon_5',
                'lisbon_6', 'lisbon_7', 'lisbon_8', 'lisbon_9', 'lisbon_10',
                'lisbon_11']

const Paris = (props) => {
  return (
    <Modal trigger={<a>Paris: Hotel Neighborhood Guide</a>} basic>
      <Header content='Paris: Hotel Neighborhood Guide' />
      <Modal.Content>
        <ImageCarousel className='carousel' images={parisImages} location={'./FeatureGuides/Paris/images'}/>
      </Modal.Content>
    </Modal>
  )
}

export default Paris
