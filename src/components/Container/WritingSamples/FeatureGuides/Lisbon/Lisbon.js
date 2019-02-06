import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../../ImageCarousel'
// import '../../../../App.css'

const lisbonImages = ['lisbon_1', 'lisbon_2', 'lisbon_3', 'lisbon_4', 'lisbon_5',
                'lisbon_6', 'lisbon_7', 'lisbon_8', 'lisbon_9', 'lisbon_10',
                'lisbon_11']

const Lisbon = (props) => {
  return (
    <Modal trigger={<a>Lisbon: The Best of the Best</a>} basic>
      <Header content='Lisbon: The Best of the Best' />
      <Modal.Content>
        <ImageCarousel className='carousel' images={lisbonImages} location={'./FeatureGuides/Lisbon/images'}/>
      </Modal.Content>
    </Modal>
  )
}

export default Lisbon
