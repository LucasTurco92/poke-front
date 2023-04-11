import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../hooks/usePokemon.jsx'
import './pokedex.scss'
import ImageWithSpinner from '../ImageWithSpinner/ImageWithSpinner.jsx'
import Typer from '../typer/typer.jsx'
import { getRandomNumber } from '../../utils/get-pokedex.js'
import useSpeaker from '../../hooks/useSpeaker.jsx'
import Types from '../types/types.jsx'

const Pokedex = () => {
  const { pokemon, blinkPokedex, setBlinkPokedex } = useContext(PokemonContext)
  const [pokemonPokedex, setPokemonPokedex] = useState({
    name: null,
    entry: '',
    sprite: '',
    spriteError: ''
  })

  const { speak } = useSpeaker()

  const getEntry = (entries) => {
    const entry = entries[getRandomNumber(0, entries?.length - 1)]

    if (entry) speak(entry)
    return entry
  }

  useEffect(() => {
    const { name, sprite, number, entries = [], spriteError, types } = pokemon
    setBlinkPokedex(true)
    setPokemonPokedex({
      name,
      entry: getEntry(entries),
      sprite,
      number,
      spriteError,
      types
    })
  }, [pokemon])

  return (
        <div className='pokedexContainer'>
            <div className="pokedexMark">
                <div className="upperPartRed">
                    <div className="upperPart">
                        <div className="bigBallWhite">
                           {
                           blinkPokedex
                             ? <div className={'bigBallBlueAnimated'}>
                            <div className="square"/>
                            <div className="smallBallBlue"/>
                            </div>
                             : <div className={'bigBallBlue'}>
                            <div className="square"/>
                            <div className="smallBallBlue"/>
                            </div>}
                        </div>
                    </div>

                    <div className="upperPart">
                        <div className="smallBall">
                            <div className="square"/>
                        </div>
                        <div className="smallBallYellow">
                            <div className="square"/>
                        </div>
                        <div className="smallBallGreen">
                            <div className="square"/>
                        </div>
                    </div>
                </div>
                <div className="pokeMark">
                    <div className="upperPart">
                        <div className="smallBall">
                            <div className="square"/>
                        </div>
                        <div className="smallBall">
                            <div className="square"/>
                        </div>
                    </div>
                    <div className='pokeSquare'>
                        <div className='pokemon'>
                            <ImageWithSpinner src={pokemonPokedex.sprite || ''}
                                            srcError={pokemonPokedex.spriteError || ''}/>
                        </div>
                        </div>
                        <div className="partBelow">
                        <div className="bigBall">
                            <div className="square"/>
                        </div>
                        <div className="hamburgerDetail">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="pokedexLines">
                    <div className="redLine"/>
                    <div className="blueLine"/>
                </div>
            </div>
            <div className='details'>
                <div className='pokeName'>
                    <span>{pokemonPokedex.name ? `${pokemonPokedex.name} ` : 'Loading...'}</span><span>{pokemonPokedex?.number ? ` #${pokemonPokedex?.number}` : ''}</span>
                </div>
                <div className='detailSquare'>
                    <Typer text={pokemonPokedex.entry}/>
                </div>
                <Types types={pokemonPokedex.types || []}/>
            </div>
        </div>
  )
}

export default Pokedex
