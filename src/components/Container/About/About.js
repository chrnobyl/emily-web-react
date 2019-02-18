import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Transition, Image } from 'semantic-ui-react'
import styles from './About.module.css'

export default class About extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Route path="/about" render={() =>
        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['about-container']}>

            <div className={styles['about-pic']}>
            </div>
            <div className={styles['about-text']}>
              <h1 style={{fontFamily: 'Comfortaa'}}>About info goes here</h1>
              <p>
                Pellentesque pulvinar id orci eu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean pellentesque convallis nulla, ac mattis nisl malesuada et. Donec ut nulla nibh. Quisque eget mi lorem. Aliquam tortor odio, pulvinar eget pretium sit amet, semper nec lorem. Vestibulum volutpat tempor cursus. Etiam gravida tellus consectetur tellus feugiat, sit amet pretium ligula suscipit.
              </p>
            </div>
          </div>
        </Transition>
      }/>
    )
  }
}
