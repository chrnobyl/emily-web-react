import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { Menu, Dropdown } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted widths='4' size='massive' color='grey'>
        <Menu.Item className={styles['nav']} name='home'
          as={Link} to='/'
          position='right'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          Home
        </Menu.Item>
        <Menu.Item className={styles['nav']} name='about'
          as={Link} to='/about'
          position='right'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}>
          About
        </Menu.Item>

        <Dropdown className={styles['nav']} item text='Writing Samples'
          name='samples'
          active={activeItem === 'samples'}
          onClick={this.handleItemClick}
          >
          <Dropdown.Menu>
            <Dropdown.Item text='Travel' as={Link} to='/travel'/>
            <Dropdown.Item text='Lifestyle' as={Link} to='/lifestyle'/>
            <Dropdown.Item text='Entertainment' as={Link} to='/entertainment'/>
          </Dropdown.Menu>
        </Dropdown>
        
        <Menu.Item className={styles['nav']} name='contact'
          as={Link} to='/contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}>
          Contact
        </Menu.Item>
      </Menu>
    )
  }
}
