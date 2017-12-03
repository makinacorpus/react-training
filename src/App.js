import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import { getAllPokemons } from './services/api'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'
import Contact from './components/Contact'

import './App.css';

const styles = theme => ({
  root: {
    overflow: 'hidden'
  },
  flex: {
    flex: 1,
  },
  content: {
    padding: 16
  }
});

class App extends Component {
  state = {
    pokemons: [],
    loading: true
  }
  componentDidMount() {
    this.setState({loading: true})
    getAllPokemons()
      .then((response) => {
        this.setState({pokemons: response.results, loading: false})
      })
  }
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit" className={classes.flex}>
                Pokemon App
              </Typography>
              <Button color="contrast" component={Link} to="/">Home</Button>
              <Button color="contrast" component={Link} to="/contact">Contact</Button>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <Route exact path="/" component={() => <PokemonList loading={this.state.loading} pokemons={this.state.pokemons} />}/>
            <Route path="/pokemon/:id" component={PokemonDetail}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);

