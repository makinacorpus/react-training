import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  container: {
    width: '80%',
    maxWidth: 400,
    marginBottom: 40
  },
  textField: {
    width: '100%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
})

class Contact extends Component {
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
    const { classes } = this.props

    return (
      <div>
        <Typography type="display2" gutterBottom>
          Contact
        </Typography>
        
        <Typography type="headline" gutterBottom headlineMapping={{headline: 'h2'}}>
          Formulaire controlé
        </Typography>
        <form className={classes.container} onSubmit={this.submitForm}>
          <TextField 
            id="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChangeEmail}
            margin="normal"
          />

          <TextField 
            id="message"
            label="Message"
            multiline
            className={classes.textField}
            value={this.state.message}
            onChange={this.handleChangeMessage}
            margin="normal"
          />

          <div className={classes.textField}>
            <Button raised color="primary" type="submit" onClick={this.submitForm}>Envoyer</Button>
          </div>
        </form>

        <Typography type="headline" gutterBottom headlineMapping={{headline: 'h2'}}>
          Formulaire non controlé
        </Typography>
        <form className={classes.container} onSubmit={this.submitForm}>
          <TextField 
            id="email"
            label="Email"
            className={classes.textField}
            inputRef={email => this.email = email}
            margin="normal"
          />

          <TextField 
            id="message"
            label="Message"
            multiline
            className={classes.textField}
            inputRef={message => this.message = message}
            margin="normal"
          />

          <div className={classes.textField}>
            <Button raised color="primary" type="submit" onClick={this.unControlledSubmit}>Envoyer</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(Contact);
