import PropTypes from 'prop-types'
import styles from './CustomButtonGroup.module.css'
import { ButtonNext, ButtonBack } from 'pure-react-carousel'
import React from 'react'
import { Button, Container } from 'semantic-ui-react'

const CustomButtonGroup = ({ slides, size }) => (
  <Container className={styles['container']} textAlign='center'>
    <Button.Group size={size}>
      <Button as={ButtonBack} labelPosition='left' icon='left chevron' content='Back' />
      <Button as={ButtonNext} labelPosition='right' icon='right chevron' content='Forward' />
    </Button.Group>
  </Container>
)

CustomButtonGroup.defaultProps = {
  size: 'large'
}

CustomButtonGroup.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string
}

export default CustomButtonGroup
