import axios from 'axios';
const endpoint = process.env.POKEMON_ENDPOINT;
const max = process.env.POKEMON_MAX;
const min = 1;


export const getPokedex = async (number) =>{
    const {data:pokemon} = await axios.get(`${endpoint}pokemon/${number}`);

    return pokemon;
}



export const getRandomNumber = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

