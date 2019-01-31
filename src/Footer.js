import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import './App.css';

const Footer = (props) => {
  return (
    <div className='footer'>
      <Segment secondary textAlign='center' size='tiny'>
        <Icon onClick={()=> window.open('https://www.linkedin.com/in/emilyhochberg/', '_blank')} link name='linkedin' size='big' />
        emily [d o t] hochberg [a t] gmail [d o t] com
      </Segment>
    </div>
  )
}

export default Footer
