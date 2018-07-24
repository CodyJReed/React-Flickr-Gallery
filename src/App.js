import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Main from './components/Main';
import NotFound from './components/NotFound';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
