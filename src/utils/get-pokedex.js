import axios from 'axios';
const endpoint = process.env.POKEMON_ENDPOINT;

export const getPokedex = async (number) =>{
    const {data:pokemon} = await axios.get(`${endpoint}pokemon/${number}`);

    return pokemon;
}



export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

