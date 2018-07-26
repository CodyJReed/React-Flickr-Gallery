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

// variable to hold "keyword" value from performSearch function
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
      if(this.props.history !== undefined) {
        this.props.history.push('/search/MistyMountain');
      }
      this.performSearch();
    }

    componentDidUpdate(prevProps) {
        if (this.props.keyword !== prevProps.keyword) {
          this.performSearch();
        }
      }

// Fetch data from Flickr API using supplied keyword and apiKey
performSearch = (keyword = this.props.keyword || 'Misty Mountain') => {
  console.log(keyword);

  // Save keyword value to tag
  tag = keyword;

  // Request Data from Flickr using axios
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

// Export object for use with loop in App.js route
export {categories}
