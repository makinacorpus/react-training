import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip';
import { CircularProgress } from 'material-ui/Progress';

import { getPokemon } from '../services/api'

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class PokemonDetail extends Component {
  state = {
    pokemon: null,
    loading: true
  }
  getPokemon(id) {
    this.setState({loading: true})
    getPokemon(id)
      .then((response) => {
        this.setState({pokemon: response, loading: false})
      })
  }

  componentDidMount() {
    this.getPokemon(this.props.match.params.id)
  }

  render() {
    const { pokemon, loading } = this.state
    const { classes } = this.props

    return (
      loading ? <CircularProgress /> :
      <div>
        <Typography type="display2" gutterBottom>
          {pokemon.name}
        </Typography>
        <img src={pokemon.sprites.front_default} />
        <p>Size: {pokemon.height}</p>
        <p>PV: {pokemon.base_experience}</p>
        <div>Type: 
          <div className={classes.row}>
            {pokemon.types.map(item => <Chip className={classes.chip} key={'type_' + item.type.name} label={item.type.name} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PokemonDetail);
