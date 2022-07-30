import axios from 'axios';

const API_URL = 'http://localhost:3000';
axios.defaults.baseURL = API_URL;

export const fetchCountry = {
    async getAll() {
        return axios.get('/contries')
    }
}