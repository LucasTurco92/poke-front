import React,{ useContext,useEffect,useState }  from "react";
import { PokemonContext } from "../../hooks/usePokemon.jsx";
import pokedexImg from "../../assets/images/pokedex.webp";
import './pokedex.scss'
import ImageWithSpinner from "../ImageWithSpinner/ImageWithSpinner.jsx";
import Typer from "../typer/typer.jsx";
import { getRandomNumber } from "../../utils/get-pokedex.js";


const Pokedex = () =>{
    const {pokemonContext } = useContext(PokemonContext);
    const [ pokemon, setPokemon ] = useState({name:'',
                                            entry:'',     
                                            sprite:''});
    const getEntry =(entries)=>{
        return entries[getRandomNumber(0,entries.length )];
    } 

    useEffect(()=>{
        const {name, sprite, entries = []} =pokemonContext;
        setPokemon({name: name,
                    entry:name?getEntry(entries):'', 
                    sprite:sprite,
                });

    },[pokemonContext])



    console.log();
    return (
        <div className='pokedexContainer'>
            <img className='pokedex' src={pokedexImg}/>
            <div className='pokeSquare'>
                <div className='pokemon'>
                     <ImageWithSpinner src={pokemon.sprite|| ''}/>
                </div>
            </div>
            <img/>
            <div className='detailSquare'>
                <Typer text={pokemon.entry}/>
            </div>
           
        </div>
    )

}

export default Pokedex;

