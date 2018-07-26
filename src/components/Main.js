import React, { Component } from 'react';
import axios from 'axios';

// Components
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import Gallery from './Gallery';
import apiKeyConfig from './config'



// Get Flickr api_key from .env file and assign to variable
const flickr = process.env.REACT_APP_API;
const apiKey = flickr || apiKeyConfig;

// List of categories
const categories = [
  {
    name: 'Yuba',
  },
  {
    name: 'Label',
  },
  {
    name: 'Trail',
  },
];

let tag = '';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    }
  }

componentDidMount() {
    this.performSearch();
  }

componentDidUpdate(prevProps) {
  if (this.props.keyword !== prevProps.keyword) {
    this.performSearch();
    }
}

performSearch = (keyword = this.props.keyword || 'Misty Mountain') => {

  tag = keyword;

  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo,
        loading: false
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

        <Navigation categories={categories}/>

        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <Gallery data={this.state.images} tag={tag} />
        }



      </div>
    );
  }
}

export {categories}
