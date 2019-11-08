import React, { Component } from 'react';
import Header from './Header';
import list from './list'
import 'bootstrap/dist/css/bootstrap.css';

export default class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      error: null
    };
  }

  listOfItems = (data) => {
    console.log(data);
    this.setState({
      list: data,
      error: null
    })
  }

  componentDidMount() {
    // let url = "https://jsonplaceholder.typicode.com/todos";
    // fetch(url)
    //   .then(response => response.json())
    //   .then(this.listOfToDos)
    //   .catch(error => {
    //     this.setState({ error })
    //   })
    this.listOfItems(list)
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.list.length > 0 &&
          this.state.list.map((item) => (
            <div key={item.id} className="card bg-light m-1">
              <div className="card-body p-2">
                <div className="d-flex p-2">
                  <div className="justify-content-start">
                    <h5 className="card-title">Title: {item.title}</h5>
                    {item.completed &&
                      <p className="card-text">Completed: true</p>}
                    {!item.completed &&
                      <p className="card-text">Completed: false</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        {this.state.list.length === 0 &&
          <h1 className="error">To Dos List is Empty</h1>}
        {this.state.error &&
          <h3 className="error">{this.state.error}</h3>}
      </div>
    );
  }
}
