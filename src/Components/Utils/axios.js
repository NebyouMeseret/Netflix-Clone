import axios from 'axios';

const BaseURL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});


export default BaseURL;