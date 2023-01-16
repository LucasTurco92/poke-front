import React from "react";
import './home.scss';
import pokeball from '../../assets/images/logo192.png';
import pokeBarr from '../../assets/images/back.png';
import Pokedex from "../../components/pokedex/pokedex";
import PokeFont from "../../components/poke-font/poke-font";
import PokeSearch from "../../components/search-box/search-box.jsx";
import { PokemonProvider } from "../../hooks/usePokemon.jsx";

const Home = () => {

const style ={
  backgroundImage:pokeBarr,
  backgroundAttachment:'fixed'
}

  return (<>
          <div className="title" style={{style}}>
              <h1><PokeFont text={'Poke-Project'}/></h1>
              <img className="pokeball" src={pokeball}/>
            </div>
            <PokemonProvider>
              <div className="content">
                <PokeSearch/>
                <Pokedex/>
              </div>
            </PokemonProvider>
          </>)
};

export default Home;