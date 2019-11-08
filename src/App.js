import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListView from './ListView'
import NewItemView from './NewItemView'
import ListItem from './ListItem'
import './App.css';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route path="/item/:id" component={ListItem} />
          <Route path="/item" component={NewItemView} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return (
      <h1 className="error">&nbsp;Error 404 - URL Not Found</h1>
    );
  }
}
