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
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=46f2c995fa45e1d99ec84d1224660b77&tags=feline&per_page=20&format=json&nojsoncallback=1')
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
    console.log(this.state.images);
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
