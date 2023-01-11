import styled from 'styled-components';
import React,{ useState,useEffect }  from "react";
import getPokedex from "../../utils/get-pokedex";

const Pokedex = ({}) =>{
    const [ pokemon, setPokemon ] = useState();
    
       useEffect(()=>{
        
            const getContent = async ()=>{
                const content = await getPokedex();
                setPokemon(content);
            } 
            getContent();
            
        },[]);
   
    return (
        <PokedexContainer>
            <img src='/pokedex.webp'/>
        </PokedexContainer>
    )

}

export default Pokedex;

const PokedexContainer = styled.div`
        width: 750px;
		margin: 50px auto 0 auto;
`