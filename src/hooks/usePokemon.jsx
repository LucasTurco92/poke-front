import { createContext, useState, useEffect } from 'react'
const endpoint = 'http://localhost:5000/'

const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({ name: '', sprite: '' })
  const [pokemons, setPokemons] = useState([])
  const [blinkPokedex, setBlinkPokedex] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${endpoint}pokemon`)
      setPokemons(data)
    }
    fetchData()
  }, [])

  return (
        <PokemonContext.Provider value={{ pokemon, setPokemon, pokemons, blinkPokedex, setBlinkPokedex }}>
            {children}
        </PokemonContext.Provider>
  )
}

export { PokemonProvider, PokemonContext }
