import React,{ useContext,useEffect,useState }  from "react";
import { PokemonContext } from "../../hooks/usePokemon.jsx";
import './pokedex.scss'
import ImageWithSpinner from "../ImageWithSpinner/ImageWithSpinner.jsx";
import Typer from "../typer/typer.jsx";
import { getRandomNumber } from "../../utils/get-pokedex.js";


const Pokedex = () =>{
    const {pokemon, blinkPokedex,setBlinkPokedex,spriteError } = useContext(PokemonContext);
    const [ pokemonPokedex, setPokemonPokedex ] = useState({name:null,
                                            entry:'',     
                                            sprite:'',
                                            spriteError:''});
    const getEntry =(entries)=>{
        return entries[getRandomNumber(0,entries?.length-1)];
    } 

    useEffect(()=>{
        const {name, sprite,number, entries= [], spriteError} =pokemon;
        setBlinkPokedex(true);
        setPokemonPokedex({name: name,
                    entry: getEntry(entries), 
                    sprite:sprite,
                    number:number,
                    spriteError:spriteError
                });
    },[pokemon])


    return (
        <div className='pokedexContainer'>
            <div className="pokedexMark">
                <div className="upperPartRed">
                    <div className="upperPart">
                        <div className="bigBallWhite">
                           {
                           blinkPokedex ? <div className={"bigBallBlueAnimated"}>
                            <div className="square"/>
                            <div className="smallBallBlue"/>
                            </div>
                            :
                            <div className={"bigBallBlue"}>
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
                            <ImageWithSpinner src={pokemonPokedex.sprite|| ''}
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
                    <span>{pokemonPokedex.name ? `${pokemonPokedex.name} #${pokemonPokedex?.number}` : 'Loading...'}</span>
                </div>
                
                <div className='detailSquare'>
                    <Typer text={pokemonPokedex.entry}/>
                </div>
            </div>
        </div>
    )

}

export default Pokedex;

