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



// Get Flickr api_key from .env file and assign to variable
const flickr = process.env.REACT_APP_API;

class App extends Component {

  state = {
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

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (keyword = 'creek') => {
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
      // <BrowserRouter>
        <div className="container">

          <SearchForm onSearch={this.performSearch}/>

          <Navigation categories={this.state.categories}/>

          <Gallery data={this.state.images}/>

        </div>
      // </BrowserRouter>
    );
  }
}


export default App;
