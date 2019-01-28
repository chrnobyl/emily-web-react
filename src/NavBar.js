import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing stackable secondary widths="5" size="massive">
        <Menu.Item name='emily'
          as={Link} to='/'
          active={activeItem === 'emily'}
          onClick={this.handleItemClick}>
          <h2 className="nav">Emily Hochberg</h2>
        </Menu.Item>
        <Menu.Item name='bio'
          as={Link} to='/'
          position='right'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}>
          <h2 className="nav">Bio</h2>
        </Menu.Item>
        <Menu.Item
          name='samples'
          as={Link} to='/writing_samples'
          active={activeItem === 'samples'}
          onClick={this.handleItemClick}>
          <h2 className="nav">Writing Samples</h2>
        </Menu.Item>
        <Menu.Item
          name='contact'
          as={Link} to='/contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}>
          <h2 className="nav">Contact</h2>
        </Menu.Item>
      </Menu>
    )
  }
}
