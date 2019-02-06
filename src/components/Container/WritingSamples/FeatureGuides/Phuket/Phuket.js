import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../../ImageCarousel'

const phuketImages = ['phuket_1', 'phuket_2', 'phuket_3', 'phuket_4',
                      'phuket_5', 'phuket_6'
                     ]

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
