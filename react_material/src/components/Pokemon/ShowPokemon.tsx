import React from "react";
import { connect } from "react-redux";
import { getPokemons } from "../../redux/actions/PokemonActions";

class ShowPokemon extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = { input: "" };
    }

    componentDidMount() {
//        const pp = this.props;
        // this.props.getPokemons()
        //     .then((action) => {
        //         if (action.error) {
        //             return this.setState({
        //                 error: action.payload.message
        //             })
        //         }
        //     });
    }

    getPokemon = () => {
        const pp = this.props;

        this.props.getPokemons().then(action => {
            if (action.error) {
              return this.setState({
                error: action.payload.message
              })
            }
      
            // const searchString = "hardtack.get('searchString')"
            // const { collection } = this.props
      
            // if (!searchString) {
            //   return this.setState({
            //     pokemonsIds: Object.keys(collection)
            //   })
            // }
      
            // const pokemonsIds = Object.keys(collection).filter(pokemonId => {
            //   const pokemon = collection[pokemonId]
      
            //   return pokemon.name.includes(searchString)
            // })
      
            // this.setState({
            //   pokemonsIds,
            //   searchString
            // })
          })

    }

    render() {
        const props = this.props;
        return (
            <div>
                <h1>Get Pokemons</h1>
                <button onClick={this.getPokemon}>
                    Get Pokemons
        </button>

        <button className="add-todo" onClick={this.getPokemon}>
          Add Todo
        </button>

            </div>
        );
    }
}

//function mapStateToProps(state: any) {
const mapStateToProps = state => {
    const { collection } = state.pokemon
  
    return {
      collection
    }
  }

const mapDispatchToProps = {
    getPokemons
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPokemon);