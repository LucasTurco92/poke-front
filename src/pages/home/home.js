import React from "react";
import './home.scss';
import pokeball from '../../assets/images/logo192.png';
import mew from '../../assets/images/mew.png';
import Pokedex from "../../components/pokedex/pokedex";
import PokeSearch from "../../components/search-box/search-box.jsx";
import { PokemonProvider } from "../../hooks/usePokemon.jsx";

const Home = () => {

  return (<>
            <PokemonProvider>
              <div className="content" style={{
              backgroundColor:'transparent',
              backgroundImage:`url(${mew})` , backgroundAttachment:"fixed",
              backgroundRepeat:' no-repeat',
              backgroundPosition: '2% 2%',
              backgroundSize: '200px',
                  }}>
                <PokeSearch/>
                <Pokedex/>
              </div>
            </PokemonProvider>
          </>)
};

export default Home;