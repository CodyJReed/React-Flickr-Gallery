import React from 'react';
import Image from './Image';
import NotFound from './NotFound';


const Gallery = props => {
  // props from App.js
  const results = props.data;
  let images;
  // Check condition of results
  images = results.length > 0
   ?
    // If true
    images = results.map(image => <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}key={image.id}title={image.title} />)
   :
    // If false
    images = <NotFound /> ;

  return(
    <div className="photo-container">
      {/* Dynamic results displayed */}
      <h1>Results for {props.tag}</h1>
      <ul>
        {images}
      </ul>
    </div>
  );
}

export default Gallery;
