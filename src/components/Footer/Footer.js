import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import styles from './Footer.module.css'
// import '../../App.css'

const Footer = (props) => {
  return (
    <div className={styles.foot}>
      <Segment secondary textAlign='center' size='tiny'>
        <Icon onClick={()=> window.open('https://www.linkedin.com/in/emilyhochberg/', '_blank')} link name='linkedin' size='big' />
        <div>© Emily Hochberg 2019</div>
        <div>Created by Chris Buggelli</div>
      </Segment>
    </div>
  )
}

export default Footer
