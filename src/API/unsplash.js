import axios from 'axios';

 export default axios.create({
  baseURL: 'https://api.unsplash.com' ,
  headers: {
	 	 Authorization: 'Client-ID pWWqQKqWEMOlQY6e5byCGLMh1wS7q3qNpCMCQnLNcrE'
	 }

});