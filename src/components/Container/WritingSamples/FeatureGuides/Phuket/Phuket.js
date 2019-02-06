import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../../ImageCarousel'

const phuketImages = []

const Phuket = (props) => {
  return (
    <Modal trigger={<a>Phuket: Private Paradise</a>} basic>
      <Header content='Phuket: Private Paradise' />
      <Modal.Content>
        <ImageCarousel className='carousel' images={phuketImages} location={'./FeatureGuides/Phuket/images'}/>
      </Modal.Content>
    </Modal>
  )
}

export default Phuket
