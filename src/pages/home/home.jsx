import React, { useCallback } from 'react'
import './home.css'
import mew from '../../assets/images/mew.png'
import Pokedex from '../../components/pokedex/pokedex.jsx'
import PokeSearch from '../../components/search-box/search-box.jsx'
import { PokemonProvider } from '../../hooks/usePokemon.jsx'
import { PokemonTeam } from '../../components/pokemonTeam/pokemonTeam.jsx'
import pikachu from '../../../src/assets/images/pika.gif'
const Home = () => {
  return (<>
            <PokemonProvider>
              <div className="content" style={{
                backgroundColor: 'transparent',
                backgroundImage: `url(${mew})`,
                backgroundAttachment: 'fixed',
                backgroundRepeat: ' no-repeat',
                backgroundPosition: '2% 2%',
                backgroundSize: '200px'
              }}>
                <PokeSearch/>
                <Pokedex/>
                <PokemonTeam/>
              <div
               style={{
                 backgroundImage: `url(${pikachu})`,
                 backgroundAttachment: 'fixed',
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'right bottom',
                 backgroundSize: '200px',
                 position: 'absolute'
               }}/>
              </div>
            </PokemonProvider>
          </>)
}

export default Home
