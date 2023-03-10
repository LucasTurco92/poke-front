
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getRandomNumber } from '../utils/getRandomNumber.js'
const max = process.env.POKEMON_MAX;
const min = 1;
const endpoint = process.env.POKEMON_ENDPOINT

export const usePokedex = ()=>{

const [pokedex, setPokedex] = useState()
const [pokemonID, setPokemonID] = useState(getRandomNumber(min, max))

    useEffect(() => {
        const getPokedex = async ({ signal }) => {
          return await axios.get(`${endpoint}pokemon/${pokemonID}`, {
            signal
          }).then(response => response)
        }
       
        const abortController = new AbortController()
        
        getPokedex({ signal: abortController.signal })
          .then(data => {
            const { data:result } = data;

            setPokedex(result)
          }).catch(error => {
            if (error.name === 'AbortError') {
              console.log('fetch aborted')
            }
          })
          
          return () => {
          abortController.abort()
        }
      },[pokemonID])

      return { pokedex,setPokemonID,pokemonID }
    }
