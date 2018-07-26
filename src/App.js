import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Main, {categories} from './components/Main';
import NotFound from './components/NotFound';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"component={Main} />

          {categories.map((category, index) =>
            <Route key={index} path={`/${category.name.toLowerCase()}`} render={ props => <Main keyword={`${category.name.toLowerCase()}`} /> } />
          )}

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
