import axios from 'axios';

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

// creating a get request function
export const getMovie = () => {
  // return api.get("");  //if I leave it empty, it gets the baseURL on auto - if baseURL is with the endpoint

   return api.get("?s=guardians&apikey=a5677765"); //otherwise , write endpoint here
}