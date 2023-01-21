import React,{ createContext,useState,useEffect }from "react";
import axios from 'axios';
const endpoint = process.env.POKEMON_ENDPOINT;

const PokemonContext = createContext();

const PokemonProvider = (props) => {
    const [pokemon, setPokemon] = useState({name:'',sprite:''});
    const [pokemons, setPokemons] = useState([]);
    const [blinkPokedex, setBlinkPokedex] = useState([]);
    
    useEffect(() => {
        const fetchData = async()=> {
          const { data } = await axios.get(`${endpoint}pokemon`);
          setPokemons(data);
        }
         fetchData();
      }, []);

    return (
        <PokemonContext.Provider value={{pokemon, setPokemon,pokemons,blinkPokedex, setBlinkPokedex}}>
            {props.children}
        </PokemonContext.Provider>
    )
};

export { PokemonProvider,PokemonContext };