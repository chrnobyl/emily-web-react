import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Transition, Button, Form } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import Success from './Success'
import Failure from './Failure'
import styles from './Contact.module.css'

export default class Contact extends Component {
  constructor(props){
    super()

    this.state = {
      visible: false,
      senderName: '',
      email: '',
      emailError: false,
      message: '',
      formSubmitted: false,
      formError: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

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

  validateEmail(email){
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  handleSubmit(event){
      event.preventDefault()

      let error = false

      if (this.state.email === '' || this.validateEmail(this.state.email) === false){
        this.setState({ emailError: true })
        error = true
      } else {
        this.setState({ emailError: false })
      }

      if (error){
        this.setState({ formError: true })
        return
      }

      this.setState({ formError: false })

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
          <div className={styles['contact-form']}>
            <h1 style={{fontFamily: 'Comfortaa'}}>Contact me</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input required label='Name:' type='text' name='senderName' value={this.state.senderName} onChange={this.handleChange}>
              </Form.Input>
              <Form.Input required label='Email:' type='text' name='email' erro={this.state.emailError} value={this.state.email} onChange={this.handleChange}>
              </Form.Input>
              <Form.TextArea required label='Message:' type='text' name='message' value={this.state.message} onChange={this.handleChange}>
              </Form.TextArea>
              <Form.Button>Submit</Form.Button>
            </Form>
            <Success visible={this.state.formSubmitted} />
            <Failure visible={this.state.formError} />
          </div>
        </Transition>
      }/>
    )
  }
}

Contact.propTypes = {
  env: PropTypes.object.isRequired
};
