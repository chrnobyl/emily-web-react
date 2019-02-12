import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Transition, Button, Form } from 'semantic-ui-react'

import { Route } from 'react-router-dom'
import '../../../App.css';

export default class Contact extends Component {
  constructor(props){
    super()

    this.state = {
      visible: false,
      name: '',
      email: '',
      message: '',
      formSubmitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

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

  handleSubmit(event){
      event.preventDefault()
      debugger

      const {
        REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        REACT_APP_EMAILJS_TEMPLATEID: template
      } = this.props.env

      this.sendMessage(
        template,
        this.props.senderEmail,
        receiverEmail,
        this.state.message)

      this.setState({
        formSubmitted: true
      })
    }

    sendMessage(templateId, senderEmail, receiverEmail, feedback){
      window.emailjs.send(
        'gmail',
        templateId,
        {
          senderEmail,
          receiverEmail,
          feedback
        })
        .then(res => {
          this.setState({ formEmailSent: true })
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Failed to send feedback. Error: ', err))
    }

  render() {
    const { visible } = this.state

    return (
      <Route path="/contact" render={() =>
        <Transition visible={visible} animation='fade' duration={800}>
          <div className='block'>
            <h1 style={{fontFamily: 'Comfortaa'}}>Contact me</h1>
            <Form onSubmit={this.handleSubmit}>
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

Contact.propTypes = {
  env: PropTypes.object.isRequired
};
