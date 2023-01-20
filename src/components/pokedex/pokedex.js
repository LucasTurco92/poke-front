import React,{ useContext,useEffect,useState }  from "react";
import { PokemonContext } from "../../hooks/usePokemon.jsx";
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
        return entries[getRandomNumber(0,entries?.length )];
    } 

    useEffect(()=>{
        const {name, sprite,number, entries = []} =pokemonContext;
        setPokemon({name: name,
                    entry:name?getEntry(entries):'', 
                    sprite:sprite,
                    number:number
                });

    },[pokemonContext])


    return (
        <div className='pokedexContainer'>
            <div className="pokedexMark">
                <div className="upperPartRed">
                    <div className="upperPartLeft">
                    <div className="bigBallWhite">
                        <div className="bigBallBlue">
                            <div className="square"/>
                            <div className="smallBallBlue">
                        </div>
                        </div>
                    </div>
                    </div>
            
                    <div className="upperPartRight">
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
                            <ImageWithSpinner src={pokemon.sprite|| ''}/>
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
                <span>{pokemon.name ? `${pokemon.name} #${pokemon?.number}` : 'Loading...'}</span>
                </div>
                
                <div className='detailSquare'>
                    <Typer text={pokemon.entry}/>
                </div>
            </div>
        </div>
    )

}

export default Pokedex;

