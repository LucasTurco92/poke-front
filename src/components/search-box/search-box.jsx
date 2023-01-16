import './search-box.scss';
import React,{ useState,useRef,useEffect,useContext } from 'react';
import getPokedex from '../../utils/get-pokedex';
import { PokemonContext } from '../../hooks/usePokemon.jsx';

const PokeSearch = ({value}) =>{
    const [inputItem, setInputItem] = useState(value || '');
    const {setPokemonContext}  = useContext(PokemonContext);
    const inputElement = useRef();

    const getContent = async ()=>{
      const content = await getPokedex();
      };

    useEffect(()=>{

      getContent();
    },[]);



    const handleSubmit = async (e) => {
      e.preventDefault();
      await getContent();
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