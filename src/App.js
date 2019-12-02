import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import ListView from './ListView'
import NewItemView from './NewItemView'
import ListItem from './ListItem'
import './App.css';


export default class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={ListView} />
          <Route path='/item/:id' component={ListItem} />
          <Route path='/item' component={NewItemView} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

class NotFound extends Component {
  render() {
    return (
      <h1 className="error">Error 404 - URL Not Found</h1>
    );
  }
}
