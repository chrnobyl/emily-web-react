import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted widths='4' size='massive'>
        <Menu.Item name='home'
          as={Link} to='/'
          position='right'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          <h3 className={styles['nav']}>Home</h3>
        </Menu.Item>
        <Menu.Item name='about'
          as={Link} to='/about'
          position='right'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}>
          <h3 className={styles['nav']}>About</h3>
        </Menu.Item>
        <Menu.Item
          name='samples'
          as={Link} to='/writing_samples'
          active={activeItem === 'samples'}
          onClick={this.handleItemClick}>
          <h3 className={styles['nav']}>Writing Samples</h3>
        </Menu.Item>
        <Menu.Item
          name='contact'
          as={Link} to='/contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}>
          <h3 className={styles['nav']}>Contact</h3>
        </Menu.Item>
      </Menu>
    )
  }
}
