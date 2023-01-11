import axios from 'axios';
const endpoint = process.env.POKEMON_ENDPOINT;


const getPokedex = async () =>{
    //const pokemon = await axios.get(`${endpoint}`);
    const pokemon = await axios.get('http://localhost:5000');
    
    console.log(process.env);
        console.log(process.env.TEST);
    return pokemon;
}

export default getPokedex;