import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import styles from './Footer.module.css'

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <Segment secondary textAlign='center' size='tiny'>
        <Icon onClick={()=> window.open('https://www.linkedin.com/in/emilyhochberg/', '_blank')} link name='linkedin' size='big' />
        <div>© Emily Hochberg 2019</div>
        <div>Created by <a href='http://chrisbuggelli.com'>Chris Buggelli</a></div>
      </Segment>
    </div>
  )
}

export default Footer
