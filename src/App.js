import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Main, { categories} from './components/Main';
import NotFound from './components/NotFound';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>

        {/* DRY using a map for Routes */}
          {categories.map((category, i) =>
           <Route key={i} path={`/${category.name.toLowerCase()}`} />
          )}

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
