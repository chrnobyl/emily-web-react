import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted color='grey' widths='4' size='massive'>
        <Menu.Item name='home'
          as={Link} to='/'
          position='right'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          <h3 className="nav">Home</h3>
        </Menu.Item>
        <Menu.Item name='bio'
          as={Link} to='/'
          position='right'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}>
          <h3 className="nav">About</h3>
        </Menu.Item>
        <Menu.Item
          name='samples'
          as={Link} to='/writing_samples'
          active={activeItem === 'samples'}
          onClick={this.handleItemClick}>
          <h3 className="nav">Writing Samples</h3>
        </Menu.Item>
        <Menu.Item
          name='contact'
          as={Link} to='/contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}>
          <h3 className="nav">Contact</h3>
        </Menu.Item>
      </Menu>
    )
  }
}
