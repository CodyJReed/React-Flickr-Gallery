import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Main from './components/Main';
import QueryResults from './components/QueryResults';
import NotFound from './components/NotFound';

class App extends Component {


  render() {
    return (

      <BrowserRouter>

        <Switch>
          {/* Root path */}
          <Route exact path="/"component={Main} />

          {/* Route for displaying SearchForm results */}
          <Route path="/search/:tag" component={QueryResults} />

          {/* "404" like route when path does not match above examples */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
