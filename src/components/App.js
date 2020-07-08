import React from 'react'; 
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

 
class App extends React.Component{


componentDidMount() {
    document.body.style.backgroundColor = "#D9E3F0"
}


state = { images: [] };


 

 //async request syntax
   onSearchSubmit = async (term) => {
	const response = await unsplash.get('/search/photos', { 
	  params: {query: term}  
	 });

	 this.setState({images: response.data.results });
	 
	
};


//alternative code
/*onSearchSubmit(term){
	unsplash.get('https://api.unsplash.com/search/photos', { 
	  params: {query: term},
	  headers: {
	 	 Authorization: 'Client-ID pWWqQKqWEMOlQY6e5byCGLMh1wS7q3qNpCMCQnLNcrE'
	 }
	 }).then((response) => {
	 console.log(response.data.results);
	});
}
   */
   



	render(){
	 return(
	  
	  <div className="ui container"  style={{marginTop:'30px'} }>
	     < SearchBar onSubmit={this.onSearchSubmit} />
		 <ImageList images={this.state.images} />
	  </div>
	 );
    }
}


export default App; 