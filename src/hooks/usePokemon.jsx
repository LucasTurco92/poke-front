import React,{ createContext,useState }from "react";

const PokemonContext = createContext();


const PokemonProvider = (props) => {
    const [pokemonContext, setPokemonContext] = useState({name:'',sprite:''});
    
    return (
        <PokemonContext.Provider value={{pokemonContext, setPokemonContext}}>
            {props.children}
        </PokemonContext.Provider>
    )
};

export { PokemonProvider,PokemonContext };