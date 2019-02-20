import React from 'react'
import { Modal, Header, Image } from 'semantic-ui-react'
import styles from './Sample.module.css'
// import ImageCarousel from '../../../ImageCarousel/ImageCarousel'

const Sample = (props) => {
  return (
    <Modal className={styles['modal']} trigger={<a>{props.title}</a>} basic size='fullscreen'>
      <Header className={styles['header']} content={props.title} />
      <Modal.Content>
        <Image className={styles['image']} src={require(`../images/${props.image + props.extension}`)} />
      </Modal.Content>
    </Modal>
  )
}

export default Sample
