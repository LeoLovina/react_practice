import { GET_POKEMONS_REQUEST, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE } from "./actionTypes";
import { RSAA } from 'redux-api-middleware'

export const getPokemons = (options = {}) => (dispatch:any) => {
    //const { limit } = options
    return dispatch({
      [RSAA]: {
  //      endpoint: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`,
        endpoint: `https://pokeapi.co/api/v2/pokemon/?limit=5`,
        method: 'GET',
        types: [
          GET_POKEMONS_REQUEST,
          GET_POKEMONS_SUCCESS,
          GET_POKEMONS_FAILURE
        ]
      }
    })
  }