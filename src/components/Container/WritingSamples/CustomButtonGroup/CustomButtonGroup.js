import PropTypes from 'prop-types'
import styles from './CustomButtonGroup.module.css'
import { ButtonNext, ButtonBack } from 'pure-react-carousel'
import React from 'react'
import { Button, Container } from 'semantic-ui-react'

const CustomButtonGroup = ({ slides, size }) => (
  <Button.Group className={styles['button-container']} size={size} fluid>
    <Button className={styles['buttons']} as={ButtonBack} labelPosition='left' icon='left chevron' content='Back' />
    <Button className={styles['buttons']} as={ButtonNext} labelPosition='right' icon='right chevron' content='Next' />
  </Button.Group>
)

CustomButtonGroup.defaultProps = {
  size: 'mini'
}

CustomButtonGroup.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string
}

export default CustomButtonGroup
