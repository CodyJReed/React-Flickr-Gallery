import React from 'react';
import Image from './Image';


const Gallery = props => {

  const results = props.data;
  let images = results.map(image =>
    <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
       key={image.id}
       title={image.title} />
  );

  return(
    <div className="photo-container">
      <h1>Results</h1>
      <ul>
        {images}
      </ul>
    </div>
  );
}

export default Gallery;
