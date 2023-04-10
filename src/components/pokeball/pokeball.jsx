import React from "react"
import './pokeball.scss'
import ImageWithSpinner from "../ImageWithSpinner/ImageWithSpinner.jsx"
import pokeballImage from '../../assets/images/logo192.png';
export const Pokeball = () =>{

    return(<div className='pokeballContainer'><ImageWithSpinner src={pokeballImage}/></div>)
}