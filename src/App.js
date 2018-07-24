import React, { Component } from 'react';
import axios from 'axios';
// import {
//   BrowserRouter,
//   Route
// } from 'react-router-dom';

// Components
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';

require('dotenv').config()

// Get Flickr api_key from index.js .env file and assign to API
const flickr = process.env.REACT_APP_API;

class App extends Component {

  state = {
    catagories: [
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

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickr}&tags=feline&per_page=20&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      // <BrowserRouter>
        <div className="container">

          <SearchForm />

          <Navigation catagories={this.state.catagories}/>

          <Gallery data={this.state.images}/>

        </div>
      // </BrowserRouter>
    );
  }
}


export default App;
