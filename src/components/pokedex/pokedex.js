import React,{ useState,useEffect }  from "react";
import getPokedex from "../../utils/get-pokedex";
import pokedexImg from "../../assets/images/pokedex.webp";
import './pokedex.scss'
import PokeFont from "../poke-font/poke-font";

const Pokedex = ({}) =>{
    const [ pokemon, setPokemon ] = useState({sprite:'',
                                                name:''});
    
    //    useEffect(()=>{
    //         const getContent = async ()=>{
    //         const content = await getPokedex();
    //         const {sprite,name} = content;
    //         setPokemon({sprite:sprite,name:name
    //                     });

    //         } 
    //         getContent();
            
    //     },[]);
   
    return (
        <div className='pokedexContainer'>
            <img className='pokedex' src={pokedexImg}/>
            <div className='pokeSquare'>
                <img className='pokemon' src={pokemon.sprite}/>
            </div>
            <img/>
            <div className='pokeName'>
                <PokeFont text={pokemon.name}/>
            </div>
        </div>
    )

}

export default Pokedex;

