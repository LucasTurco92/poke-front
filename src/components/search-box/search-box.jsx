import './search-box.scss';
import React,{ useState,useRef,useEffect,useContext } from 'react';
import { getPokedex,getRandomNumber } from '../../utils/get-pokedex';
import { PokemonContext } from '../../hooks/usePokemon.jsx';
import rndIcon from '../../assets/images/randomIcon.svg';
import srcIcon from '../../assets/images/searchIco.svg';
const max = process.env.POKEMON_MAX;
const min = 1;

const PokeSearch = () =>{
    const [inputItem, setInputItem] = useState('');
    const [suggestionsPokemon, setSuggestionsPokemon] = useState([]);
    const [selectedPokemon,setSelectedPokemon] = useState({});
    const {setPokemonContext, pokemons} = useContext(PokemonContext);

    const inputElement = useRef();

    const getContent = async (number)=>{
      const content = await getPokedex(number);
      setPokemonContext({...content,number:number});
      };
  
     const getRandomPokemon=()=>{
      getContent(getRandomNumber(min, max));
     }

    useEffect(()=>{
      getRandomPokemon();
    },[]);

    useEffect(()=>{
      const filtered = pokemons.filter(suggestion =>
        suggestion.name.includes(inputItem.toLocaleLowerCase())).slice(0,5).sort();
        setSuggestionsPokemon(filtered);
    },[inputItem]);

    const selectedOption = async(e,selected)=>{
      await getContent(selected.number);
      e.preventDefault();
      setInputItem(selected.name)
      setSuggestionsPokemon([]);
    } 



    const handleSubmit = async (e) => {
      e.preventDefault();
      await getContent(suggestionsPokemon[0]?.number ||getRandomNumber(min, max));
      setSuggestionsPokemon([]);
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
                placeholder='Search...'/>
                {suggestionsPokemon.length > 0 && inputItem != ''?
                (<ul className='suggestions'>
                {suggestionsPokemon.map(suggestion => (
                  <li key={suggestion.number}
                  onClick={(e)=>{selectedOption(e,suggestion)} }>{suggestion.name}</li>
                ))}
              </ul>): <></>}
              <img src={srcIcon} className='button' onClick={handleSubmit}/>
              <img src={rndIcon} className='button' onClick={getRandomPokemon}/>
              
            </form >
   );

}

export default PokeSearch;