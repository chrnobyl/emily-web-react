import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from '../../ImageCarousel'

const stockholmImages = ['stockholm_1', 'stockholm_2', 'stockholm_3', 'stockholm_4',
                         'stockholm_5', 'stockholm_6', 'stockholm_7', 'stockholm_8',
                         'stockholm_9'
                        ]

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
