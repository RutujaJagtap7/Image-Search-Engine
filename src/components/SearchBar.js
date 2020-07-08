import React from 'react';
import ImageList from './ImageList';
class SearchBar extends React.Component {
  

  state={term:''};

  //call back functions from child to parent
  onFormSubmit= event => {
  	  event.preventDefault();

      this.props.onSubmit(this.state.term); 
 }

	render() {
		return (
		         <div className="ui segment">
				  <form onSubmit={this.onFormSubmit} className="ui form">
				   <div className="field">
				    <label> IMAGE SEARCH </label>
                    <input 
					   type="text" 
					   value={this.state.term} 
					   onChange={(event) => this.setState({term:event.target.value})}
					 />
					</div>
                   </form>

					  
                 </div> 

		);
	}
}


export default SearchBar;