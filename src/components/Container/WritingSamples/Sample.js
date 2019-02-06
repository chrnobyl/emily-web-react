import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import ImageCarousel from './ImageCarousel'

const Sample = (props) => {
  return (
    <Modal trigger={<a>{props.title}</a>} basic>
      <Header content={props.title} />
      <Modal.Content>
        <ImageCarousel className='carousel' images={props.images} location={'./FeatureGuides/images'} extension={props.extension}/>
      </Modal.Content>
    </Modal>
  )
}

export default Sample
