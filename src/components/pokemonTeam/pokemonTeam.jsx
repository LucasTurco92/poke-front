import React from "react"
import { Button } from "../button/button.jsx"
import { Pokeball } from "../pokeball/pokeball.jsx"
import './pokemonTeam.scss'
export const PokemonTeam = () =>{

    const m = ()=>{
        alert('the team is saved');
      }

    return(<div className='container' >
        <Pokeball/>
            <Button action={m} value={'save team'}/>
            </div>)
}