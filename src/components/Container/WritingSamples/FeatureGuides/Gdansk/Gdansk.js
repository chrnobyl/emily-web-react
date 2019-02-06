import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../../ImageCarousel'

const gdanskImages = ['gdansk_1', 'gdansk_2', 'gdansk_3', 'gdansk_4',
                      'gdansk_5', 'gdansk_6', 'gdansk_7', 'gdansk_8',
                      'gdansk_9', 'gdansk_10', 'gdansk_11', 'gdansk_12',
                      'gdansk_13', 'gdansk_14', 'gdansk_15', 'gdansk_16',
                      'gdansk_17', 'gdansk_18', 'gdansk_19', 'gdansk_20',
                      'gdansk_21']

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
