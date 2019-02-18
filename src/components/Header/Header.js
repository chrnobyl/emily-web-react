import React from 'react';
import styles from './Header.module.css'
import { Icon } from 'semantic-ui-react'
import NavBar from '../NavBar/NavBar';

const Header = (props) => {
  // let style = {
  //   fontSize: 36
  // }

  return (
    <div>
      <div className={styles['icons']}>
        <Icon onClick={()=> window.open('https://www.linkedin.com/in/emilyhochberg/', '_blank')} link name='linkedin' size='big' />
        <Icon onClick={()=> window.open('https://twitter.com/emily.hochberg', '_blank')} link name='twitter' size='big' />
      </div>
      <div className={styles['header']}>
        <p>Emily Hochberg</p>
        <p>Writer | Editor | Content & Social Media Strategist</p>
      </div>
      <NavBar />
    </div>
  )
}

export default Header
