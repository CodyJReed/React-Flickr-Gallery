import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Main, {categories} from './components/Main';
import QueryResults from './components/QueryResults';
import NotFound from './components/NotFound';

class App extends Component {


  render() {
    return (

      <BrowserRouter>

        <Switch>

          <Route exact path="/"component={Main} />

          <Route path="/:tag" component={QueryResults } />


          {categories.map((category, index) =>
            <Route
              key={index}
              path={`/${category.name}`}
              render={ () => <Main keyword={`${category.name}`} /> }
             />
          )}


          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
