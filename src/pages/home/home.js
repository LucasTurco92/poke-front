import React from "react";
import './home.scss';
import pokeball from '../../assets/images/logo192.png';
import pokeBarr from '../../assets/images/back.png';
import Pokedex from "../../components/pokedex/pokedex";
import PokeFont from "../../components/poke-font/poke-font";

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
            <Pokedex/>
          </>)
};

export default Home;