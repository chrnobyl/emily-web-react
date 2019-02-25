import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Transition } from 'semantic-ui-react'
import styles from './TravelGuides.module.css'

export default class TravelGuides extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Transition visible={visible} animation='fade' duration={800}>
        <div className={styles['travel-guides']}>
          <p>
            Pellentesque pulvinar id orci eu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean pellentesque convallis nulla, ac mattis nisl malesuada et. Donec ut nulla nibh. Quisque eget mi lorem. Aliquam tortor odio, pulvinar eget pretium sit amet, semper nec lorem. Vestibulum volutpat tempor cursus.
          </p>
          <Button as={Link} to='/travel'>Travel Guides</Button>
        </div>
      </Transition>
    )
  }
}
