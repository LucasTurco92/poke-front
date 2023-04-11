
import { useEffect, useState } from 'react'
import { getRandomNumber } from '../utils/getRandomNumber.js'
const max = 251
const min = 1
const endpoint = 'http://localhost:5000/'

export const usePokedex = () => {
  const [pokedex, setPokedex] = useState()
  const [pokemonID, setPokemonID] = useState(getRandomNumber(min, max))

  useEffect(() => {
    const getPokedex = async ({ signal }) => {
      return fetch(`${endpoint}pokemon/${pokemonID}`, {
        signal
      }).then(response => response.json())
    }

    const abortController = new AbortController()

    getPokedex({ signal: abortController.signal })
      .then(data => {
        setPokedex(data)
      }).catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        }
      })

    return () => {
      abortController.abort()
    }
  }, [pokemonID])

  return { pokedex, setPokemonID, pokemonID }
}
