import React, { Component } from 'react';
import axios from 'axios';

// Components
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import Gallery from './Gallery';



// Get Flickr api_key from .env file and assign to variable
const flickr = process.env.REACT_APP_API;

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: 'Cats',
        },
        {
          name: 'Dogs',
        },
        {
          name: 'Computers',
        },
      ],
      images: []
    }
  }

componentDidUpdate(prevProps) {
  if (this.keyword !== prevProps.keyword) {
   this.performSearch();
 }
}

componentDidMount() {
  this.performSearch();
}

performSearch = (keyword = this.keyword || 'creek') => {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickr}&tags=${keyword}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

  render() {
    return (
      <div className="container">

        <SearchForm onSearch={this.performSearch}/>

        <Navigation categories={this.state.categories}/>

        <Gallery data={this.state.images}/>

      </div>
    );
  }
}
