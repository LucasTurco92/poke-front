import React,{ useState,useContext }  from "react";
import { PokemonContext } from "../../hooks/usePokemon.jsx";
import pokedexImg from "../../assets/images/pokedex.webp";
import './pokedex.scss'
import PokeFont from "../poke-font/poke-font";

const Pokedex = () =>{
    const {pokemonContext } = useContext(PokemonContext);

    return (
        <div className='pokedexContainer'>
            <img className='pokedex' src={pokedexImg}/>
            <div className='pokeSquare'>
                <img className='pokemon' src={pokemonContext.sprite|| ''}/>
            </div>
            <img/>
            <div className='pokeName'>
                <PokeFont text={pokemonContext.name|| ''}/>
            </div>
        </div>
    )

}

export default Pokedex;

