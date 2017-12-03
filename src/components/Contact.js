import React, { Component } from 'react';

export class Contact extends Component {
  state = {
    email: '',
    message: ''
  }

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
      </div>
    )
  }
}
