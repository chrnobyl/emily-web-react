import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Transition, Button, Form } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import Success from './Success'
import '../../../App.css';

export default class Contact extends Component {
  constructor(props){
    super()

    this.state = {
      visible: false,
      senderName: '',
      email: '',
      message: '',
      formSubmitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  // state = {
  //   visible: false,
  //   name: "",
  //   email: "",
  //   message: ""
  // }
  static sender = 'sender@example.com'

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  handleCancel() {
    this.setState({
      senderName: '',
      email: '',
      message: ''
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(event){
      event.preventDefault()

      const {
        REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        REACT_APP_EMAILJS_TEMPLATEID: template
      } = this.props.env

      this.sendMessage(
        template,
        this.state.senderName,
        this.state.email,
        receiverEmail,
        this.state.message)

      // this.setState({
      //   senderName: '',
      //   email: '',
      //   message: '',
      //   formSubmitted: true
      // })
    }

    sendMessage(templateId, senderName, senderEmail, receiverEmail, message){
      window.emailjs.send(
        'gmail',
        templateId,
        {
          senderName,
          senderEmail,
          receiverEmail,
          message
        })
        .then(res => {
          this.setState({
            senderName: '',
            email: '',
            message: '',
            formSubmitted: true
          })
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
              <Form.Input label='Name:' type='text' name='senderName' value={this.state.senderName} onChange={this.handleChange}>
              </Form.Input>
              <Form.Input label='Email:' type='text' name='email' value={this.state.email} onChange={this.handleChange}>
              </Form.Input>
              <Form.TextArea label='Message:' type='text' name='message' value={this.state.message} onChange={this.handleChange}>
              </Form.TextArea>
              <Form.Button>Submit</Form.Button>
            </Form>
            <Success visible={this.state.formSubmitted} />
          </div>
        </Transition>
      }/>
    )
  }
}

Contact.propTypes = {
  env: PropTypes.object.isRequired
};
