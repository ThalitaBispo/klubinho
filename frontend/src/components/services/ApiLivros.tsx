import axios from 'axios';

// const apilivros = axios.create({
//   baseURL: 'https://api.nookipedia.com/',
//   headers: {
//     'X-API-KEY': '#', 
//     'Content-Type': 'application/json',
//   },
// });

const apilivros = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
    headers: {
    //   'X-API-KEY': '#', 
      'Content-Type': 'application/json',
    },
  });

export default apilivros;