import React from "react";
import Header from "../components/header/header";
import Pokedex from "../components/pokedex/pokedex";
import styled from 'styled-components';

const Home = () =>{
    
    return (
        <HomeContainer> 
            <Header title="Poke Project"/>
            <Pokedex/>
        </HomeContainer>
       

 
    )
};

export default Home;


const HomeContainer = styled.div`
		padding:20px;
`
