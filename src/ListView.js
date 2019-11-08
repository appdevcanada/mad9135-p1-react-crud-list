import React, { Component } from 'react';
import Header from './Header';
import ListItem from './ListItem'
import { Button } from 'reactstrap';
import item from './list'
import 'bootstrap/dist/css/bootstrap.css';

var listing = [];
var emptyList = true;

export default class ListView extends Component {
  constructor(props) {
    super(props);
    listing = localStorage.getItem('MyList21051969');
    emptyList = listing == null ? true : false;
    console.log(listing);
    this.state = {
      list: emptyList ? [] : listing,
      error: null
    }
  }

  componentDidMount() {

  }

  editItem = (e) => {
    console.log("ID Parent: " + e.target.id);
    this.props.history.push(`/item/${e.target.id}`, { name: e.target.value });
    return (<ListItem />);
  }

  deleteItem = (e) => {
    console.log("ID Parent: " + e.target.id);
    return true;
  }

  render() {
    return (
      <div>
        <Header />
        <div id="list">
          {this.state.list.length > 0 &&
            this.state.list.map((item) => (
              <div key={item.id} className="card bg-light m-1">
                <div className="card-body p-2">
                  <div className="d-flex p-2">
                    <div className="justify-content-start">
                      <h4 className="card-title">Name: {item.name}</h4>
                      <p className="card-text">User: {item.username}</p>
                      <p className="card-text">e-Mail: {item.email}</p>
                    </div>
                    <div className="d-flex align-items-start flex-column ml-auto">
                      <div className="mb-auto">
                        <Button onClick={this.editItem} value={item.name} id={item.id} className="btn btn-outline-success" style={{ width: 100 }}>Edit</Button>
                      </div>
                      <div >
                        <Button onClick={this.deleteItem} value={item.name} id={item.id} className="btn btn-outline-danger" style={{ width: 100 }}>Delete</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {this.state.list.length === 0 &&
            <h3 className="error">Item List is Empty<br />Click New Item</h3>}
          {this.state.error &&
            <h3 className="error">{this.state.error}</h3>}
        </div>
      </div>
    );
  }
}
