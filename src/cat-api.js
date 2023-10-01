import axios from 'axios';

// const KEY =
//   'live_C3c6HrqUCSxPnB0QwQyFxkSFoVmKmEOGstYOA5CiiCpZiVhPrKruRZUkRg8As1kb';

// const URL = 'https://api.thecatapi.com/v1';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  "live_C3c6HrqUCSxPnB0QwQyFxkSFoVmKmEOGstYOA5CiiCpZiVhPrKruRZUkRg8As1kb";

// const axios = require('axios');
// GET api.thecatapi.com/v1/breeds;


export function fetchBreeds() {
  // console.log(response);
  return axios
    .get('/breeds')
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log('error', error);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get('/images/search?breed_ids='+ breedId)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log('error', error);
    });
}
