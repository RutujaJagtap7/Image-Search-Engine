import React from 'react';
import './ImageList.css'
//import ImageCard from './ImageCard';

//define key property
const ImageList =(props)=>{
	const images = props.images.map((image)=>{
	 return <img alt={image.description} key={image.id} src={image.urls.regular} />
	});
return <div className="image-list">{images }</div>
}


/* const ImageList = props => {
    const images = props.images.map(({description,id,urls}) => {
 	 return <img alt={description} key={id} scr={urls.regular}/>;
 	 });
 	 return <div>{images}</div>;

// };*/

export default ImageList; 


