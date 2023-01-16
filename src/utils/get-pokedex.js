import axios from 'axios';
const endpoint = process.env.POKEMON_ENDPOINT;


const getPokedex = async () =>{
    const {data:pokemon} = await axios.get(`${endpoint}`);

    return pokemon;
}

export default getPokedex;