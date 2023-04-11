import './search-box.css'
import { useState, useEffect, useContext } from 'react'
import { getRandomNumber } from '../../utils/get-pokedex'
import { PokemonContext } from '../../hooks/usePokemon.jsx'
import rndIcon from '../../assets/images/randomIcon.svg'
import srcIcon from '../../assets/images/searchIco.svg'
import { usePokedex } from '../../hooks/usePokedex.jsx'

const max = 251
const min = 1

const PokeSearch = () => {
  const [inputItem, setInputItem] = useState('')
  const [suggestionsPokemon, setSuggestionsPokemon] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  const { setPokemon, pokemons } = useContext(PokemonContext)
  const { pokedex, pokemonID, setPokemonID } = usePokedex()

  const getRandomPokemon = () => {
    setShowSuggestion(false)
    setInputItem('')
    setPokemonID(getRandomNumber(min, max))
  }

  useEffect(() => {
    const pokemon = { ...pokedex, number: pokemonID }

    setPokemon(pokemon)
    return () => {
      setShowSuggestion(false)
      setSuggestionsPokemon([])
    }
  }, [pokedex])

  useEffect(() => {
    const filtered = pokemons.filter(suggestion =>
      suggestion.name.includes(inputItem.toLocaleLowerCase())).slice(0, 5).sort()
    setSuggestionsPokemon(filtered)
  }, [inputItem])

  const selectedOption = async (e, selected) => {
    setShowSuggestion(false)
    setSuggestionsPokemon([])
    e.preventDefault()
    setInputItem(selected.name)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (inputItem && suggestionsPokemon.length > 0) {
      setPokemonID(suggestionsPokemon[0]?.number)
      setInputItem(suggestionsPokemon[0]?.name)
    }
  }

  return (
      <form className='searchBoxContainer'
              spellCheck="false"
              onSubmit={handleSubmit}>
              <input
              type='text'
              className='searchBox'
              value={inputItem}
              onChange={(e) => { setInputItem(e.target.value); e.target.value ? setShowSuggestion(true) : setShowSuggestion(false) }}
              placeholder='Search...'/>
              {showSuggestion && suggestionsPokemon.length > 0
                ? (<ul className='suggestions'>
              {suggestionsPokemon.map(suggestion => (
                <li key={suggestion.number}
                onClick={(e) => { selectedOption(e, suggestion) } }>{suggestion.name}</li>
              ))}
            </ul>)
                : <></>}
            <img src={srcIcon} className='button' onClick={handleSubmit}/>
            <img src={rndIcon} className='button' onClick={getRandomPokemon}/>
          </form >)
}

export default PokeSearch
