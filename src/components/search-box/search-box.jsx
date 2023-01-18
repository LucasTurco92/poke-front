import './search-box.scss';
import React,{ useState,useRef,useEffect,useContext } from 'react';
import { getPokedex,getRandomNumber } from '../../utils/get-pokedex';
import { PokemonContext } from '../../hooks/usePokemon.jsx';
const max = process.env.POKEMON_MAX;
const min = 1;

const PokeSearch = () =>{
    const [inputItem, setInputItem] = useState('');
    const {setPokemonContext}  = useContext(PokemonContext);
    const inputElement = useRef();

    const getContent = async (number)=>{
      const content = await getPokedex(number);
      setPokemonContext(content);
      };

    useEffect(()=>{
      getContent(getRandomNumber(min, max));
    },[]);



    const handleSubmit = async (e) => {
      e.preventDefault();
      await getContent(inputItem);
    };

    return (
    <form className='searchBoxContainer'
                onSubmit={handleSubmit}>
                <input 
                type='text'
                className='searchBox'
                value={inputItem}
                ref={inputElement}
                onChange={(e) => setInputItem(e.target.value)}
                placeholder='Search... Pokemon!'/>
            </form >);

}

export default PokeSearch;