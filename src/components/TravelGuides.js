import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import '../App.css';

const TravelGuides = (props) => {
  return (
    <div className='travel-guides'>
      <p>
        Pellentesque pulvinar id orci eu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean pellentesque convallis nulla, ac mattis nisl malesuada et. Donec ut nulla nibh. Quisque eget mi lorem. Aliquam tortor odio, pulvinar eget pretium sit amet, semper nec lorem. Vestibulum volutpat tempor cursus. Etiam gravida tellus consectetur tellus feugiat, sit amet pretium ligula suscipit.
      </p>
      <Button as={Link} to='/writing_samples'>Travel Guides</Button>
    </div>
  )
}

export default TravelGuides
