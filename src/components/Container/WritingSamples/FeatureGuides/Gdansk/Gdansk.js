import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../../ImageCarousel'

const gdanskImages = ['lisbon_1', 'lisbon_2', 'lisbon_3', 'lisbon_4', 'lisbon_5',
                'lisbon_6', 'lisbon_7', 'lisbon_8', 'lisbon_9', 'lisbon_10',
                'lisbon_11']

const Gdansk = (props) => {
  return (
    <Modal trigger={<a>Gdansk: The 50 Hour Guide</a>} basic>
      <Header content='Gdansk: The 50 Hour Guide' />
      <Modal.Content>
        <ImageCarousel className='carousel' images={gdanskImages} location={'./FeatureGuides/Gdansk/images'}/>
      </Modal.Content>
    </Modal>
  )
}

export default Gdansk
