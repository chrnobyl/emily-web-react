import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Image, Transition } from 'semantic-ui-react'
import './App.css';

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
          <div>
            <div className='bio'>
              <h1>About info goes here</h1>
              <p>
                Pellentesque pulvinar id orci eu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean pellentesque convallis nulla, ac mattis nisl malesuada et. Donec ut nulla nibh. Quisque eget mi lorem. Aliquam tortor odio, pulvinar eget pretium sit amet, semper nec lorem. Vestibulum volutpat tempor cursus. Etiam gravida tellus consectetur tellus feugiat, sit amet pretium ligula suscipit.
              </p>
              <p>
                Aenean accumsan sapien nec libero ornare placerat. Aenean leo sapien, auctor a tempus volutpat, gravida ut enim. Fusce sagittis rhoncus turpis sed aliquet. Integer scelerisque, risus quis vulputate fermentum, tellus ex pharetra lectus, sit amet bibendum risus enim id urna. Praesent feugiat, libero ac porttitor consectetur, dolor tortor tincidunt augue, nec pellentesque eros ligula nec tortor. Duis in ipsum fringilla, posuere nunc sit amet, rutrum nibh.
              </p>
            </div>
            <Image src='em_bowie.jpg' alt='em_bowie' style={{float: 'right', position: 'relative'}} size='huge'/>
          </div>
        </Transition>
      }/>
    )
  }
}
