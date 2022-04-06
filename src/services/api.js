import axios from 'axios';

// api base url for requests
export default axios.create({
  baseURL: 'https://api.github.com/repos/',
});
