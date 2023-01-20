import React from "react";
import './home.scss';
import pokeball from '../../assets/images/logo192.png';
//import pokeBarr from '../../assets/images/back.png';
import Pokedex from "../../components/pokedex/pokedex";
import PokeSearch from "../../components/search-box/search-box.jsx";
import { PokemonProvider } from "../../hooks/usePokemon.jsx";

const Home = () => {


  return (<>
          <div className="title">
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