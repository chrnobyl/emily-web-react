import React, { Component } from 'react'
import { Transition, Button, Form } from 'semantic-ui-react'

import { Route } from 'react-router-dom'
import '../../../App.css';

export default class Contact extends Component {
  constructor(props){
    super()

    this.state = {
      visible: false,
      name: "",
      email: "",
      message: ""
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)

  }
  // state = {
  //   visible: false,
  //   name: "",
  //   email: "",
  //   message: ""
  // }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  handleChange(event, result) {
      this.setState({
        [result.placeholder]: result.value
      })
    }

  // handleSubmit(event) {
  //   event.preventDefault()
  //   let stateObj = this.state
  //   console.log(stateObj)
  //   for (var key in stateObj) {
  //     if (stateObj[key] === ""){
  //       delete stateObj[key]
  //     }
  //   }
  //   this.props.applyFilter(stateObj)
  // }

  render() {
    const { visible } = this.state

    return (
      <Route path="/contact" render={() =>
        <Transition visible={visible} animation='fade' duration={800}>
          <div className='block'>
            <h1 style={{fontFamily: 'Comfortaa'}}>Contact me</h1>
            <Form>
              <Form.Input label='Name:' type='text' name='string' value={this.state.string} onChange={this.handleChange}>
              </Form.Input>
              <Form.Input label='Email:' type='text' name='string' value={this.state.string} onChange={this.handleChange}>
              </Form.Input>
              <Form.TextArea label='Message:' type='text' name='string' value={this.state.string} onChange={this.handleChange}>
              </Form.TextArea>
              <Form.Button>Submit</Form.Button>
            </Form>
          </div>
        </Transition>
      }/>
    )
  }
}
