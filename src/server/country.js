import axios from 'axios';

const API_URL = 'http://localhost:3000';
axios.defaults.baseURL = API_URL;

// export const fetchCountry =()=> {
   
//         return  axios('/contries')
    
// }
// const handlePokemonFetch = () => {
//     return axios(`https://pokeapi.co/api/v2/pokemon/${query}`);
// };
export const fetchCountry = async () => {
  const response = await fetch('http://localhost:3000/contries')
  await new Promise(r => setTimeout(r, 1000)) // wait a second
  return response.json()
};