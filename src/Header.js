import React, { Component } from 'react';
import NewItemView from './NewItemView'
import { NavLink } from 'react-router-dom';
import logo from './favicon.png'

export default class Header extends Component {

  newItem = (e) => {
    console.log("ID Parent: " + e.target.id);
    this.props.history.push("/item", { name: e.target.value });
    return true;
  }

  render() {
    return (
      <div className="App-header">
        <img className="mr-auto ml-3" src={logo} height="50" alt=""></img>
        <h2 className="mr-auto">React Listing</h2>
        <nav className="navbar navbar-static-top justify-content-end">
          <ul className="nav nav-pills">
            <li><NavLink to="/item" activeClassName="nav-item">New Item</NavLink></li>
          </ul>
        </nav>
      </div >
    )
  }
}