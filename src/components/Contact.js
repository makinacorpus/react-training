import React, { Component } from 'react';

export class Contact extends Component {
  state = {
    email: '',
    message: ''
  }

  email = ''
  message = ''

  submitForm = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  
  handleChangeEmail = (e) => {
    this.setState({email: e.target.value})
  }
  
  handleChangeMessage = (e) => {
    this.setState({message: e.target.value})
  }
  
  unControlledSubmit = (e) => {
    e.preventDefault()
    console.log('email: ', this.email.value)
    console.log('message: ', this.message.value)
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>

        <h2>Formulaire controlé</h2>
        <form onSubmit={this.submitForm}>
          <label htmlFor="email">Email</label>
          <input id="email" value={this.state.email} onChange={this.handleChangeEmail} />

          <label htmlFor="message">Message</label>
          <textarea id="message" value={this.state.message} onChange={this.handleChangeMessage}></textarea>

          <button type="submit" onClick={this.submitForm}>Envoyer</button>
        </form>

        <h2>Formulaire non controlé</h2>
        <form onSubmit={this.submitForm}>
          <label htmlFor="email">Email</label>
          <input id="email" ref={email => this.email = email} />

          <label htmlFor="message">Message</label>
          <textarea id="message" ref={message => this.message = message}></textarea>

          <button type="submit" onClick={this.unControlledSubmit}>Envoyer</button>
        </form>
      </div>
    )
  }
}