import React, { Component } from 'react'
import { Button, Transition } from 'semantic-ui-react'
import styles from './WorkTogether.module.css'

export default class WorkTogether extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Transition visible={visible} animation='fade' duration={800}>
        <div className={styles['work-together']}>
          <p>
            Let's work together! Drop me a line and I'll see what I can do for you.
          </p>
          <Button>Contact me</Button>
        </div>
      </Transition>
    )
  }
}
