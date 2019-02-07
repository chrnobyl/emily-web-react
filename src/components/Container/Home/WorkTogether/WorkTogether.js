import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styles from './WorkTogether.module.css'

const WorkTogether = (props) => {
  return (
    <div className={styles['work-together']}>
      <p>
        Let's work together! Drop me a line and I'll see what I can do for you.
      </p>
      <Button>Contact me</Button>
    </div>
  )
}

export default WorkTogether
