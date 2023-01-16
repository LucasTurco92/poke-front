import './search-box.scss';
import React,{ useState,useRef } from 'react';

const PokeSearch = ({value}) =>{
    const [inputItem, setInputItem] = useState(value || '');
    const inputElement = useRef();

      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The name you entered was: ${inputItem}`)
      };
      const fff = () => {
        alert(`The name you entered was: ${inputItem}`)
      };

    return (<>
    <button onClick={fff}>
      </button>
    {/* <form className='searchBoxContainer'
                onClick={handleSubmit}>
                <input 
                type='text'
                className='searchBox'
                value={inputItem}
                ref={inputElement}
                onChange={(e) => setInputItem(e.target.value)}
                placeholder='Search... Pokemon!' onSubmit={handleSubmit}/>
                <input type="submit" onSubmit={handleSubmit}/>
                <button type="submit">Submit</button>
            </form > */}
    </>);

}

export default PokeSearch;