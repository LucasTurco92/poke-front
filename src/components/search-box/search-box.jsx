import './search-box.scss';
import React,{ useState,useRef,useEffect,useContext } from 'react';
import { getPokedex,getRandomNumber } from '../../utils/get-pokedex';
import { PokemonContext } from '../../hooks/usePokemon.jsx';
import rndIcon from '../../assets/images/randomIcon.svg';
import srcIcon from '../../assets/images/searchIco.svg';
const max = process.env.POKEMON_MAX;
const min = 1;

const useField = ({type}) =>{
  const [value, setValue] = useState('');
  
  const onChange = event =>{
    setValue(event.target.value)
  }
  
  return {
    type,
    value,
    onChange
  }

}

const PokeSearch = () =>{
    const [inputItem, setInputItem] = useState('');
    const [suggestionsPokemon, setSuggestionsPokemon] = useState([]);
    const [showSuggestion,setShowSuggestion] = useState(false);
    const { pokemon,setPokemon, pokemons } = useContext(PokemonContext);

    const inputElement = useRef();

    const getContent = async (number)=>{
      if(number != pokemon.number){
        const content = await getPokedex(number);
        const pokemon = {...content,number:number};
        setPokemon(pokemon);
        setShowSuggestion(false);
        setSuggestionsPokemon([]);
      }else{

        setPokemon({...pokemon,number:number});
      }

    };
  
     const getRandomPokemon=()=>{
      setShowSuggestion(false);
      setInputItem('');
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
      setInputItem(selected.name);
    } 

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(inputItem && suggestionsPokemon.length > 0 ){
        await getContent(suggestionsPokemon[0]?.number);
        setInputItem(suggestionsPokemon[0]?.name);
      }
    };

    return (
      <form className='searchBoxContainer'
              spellCheck="false"
              onSubmit={handleSubmit}>
              <input 
              type='text'
              className='searchBox'
              value={inputItem}
              ref={inputElement}
              onChange={(e) => {setInputItem(e.target.value);e.target.value ? setShowSuggestion(true):setShowSuggestion(false)}}
              placeholder='Search...'/>
              {showSuggestion && suggestionsPokemon.length > 0 ?
              (<ul className='suggestions'>
              {suggestionsPokemon.map(suggestion => (
                <li key={suggestion.number}
                onClick={(e)=>{selectedOption(e,suggestion)} }>{suggestion.name}</li>
              ))}
            </ul>): <></>}
            <img src={srcIcon} className='button' onClick={handleSubmit}/>
            <img src={rndIcon} className='button' onClick={getRandomPokemon}/>
          </form >);
}

export default PokeSearch;