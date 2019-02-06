import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../../ImageCarousel'

const parisImages = ['paris_1', 'paris_2', 'paris_3', 'paris_4',
                     'paris_5', 'paris_6', 'paris_7', 'paris_8',
                     'paris_9', 'paris_10', 'paris_11', 'paris_12'
                    ]

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
