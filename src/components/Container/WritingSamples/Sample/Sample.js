import React from 'react'
import { Modal, Header } from 'semantic-ui-react'
import styles from './Sample.module.css'
import ImageCarousel from '../ImageCarousel/ImageCarousel'

const Sample = (props) => {
  return (
    <Modal className={styles['modal']} trigger={<a>{props.title}</a>} basic>
      <Header className={styles['header']} content={props.title} />
      <Modal.Content>
        <ImageCarousel images={props.images} location={'Travel/PorterSail/images'} extension={props.extension}/>
      </Modal.Content>
    </Modal>
  )
}

export default Sample
