import React, { Component } from 'react';
import AppHeader from './AppHeader';
import ListView from './ListView'
import UId from 'cuid';
import 'bootstrap/dist/css/bootstrap.css';


export default class NewItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      company: '',
      website: '',
      email: '',
      error: null
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateList = (e) => {
    e.preventDefault();
    if (this.state.company.length > 0) {
      var uid = UId();
      const newItem = {
        id: uid,
        company: this.state.company,
        website: this.state.website,
        email: this.state.email
      };

      var lsListing = localStorage.getItem("MyList21051969");
      var listing = JSON.parse(lsListing);
      if (listing === null || listing.length === 0) {
        localStorage.setItem("MyList21051969", JSON.stringify([newItem]));
      } else {
        listing.push(newItem);
        localStorage.setItem("MyList21051969", JSON.stringify(listing));
      }
      this.returnToList()
    } else {
      alert("Please input some valid text in Company's name");
    }
  }

  returnToList = (e) => {
    this.props.history.push("/");
    return (<ListView />);
  }

  render() {
    return (
      <div id="list">
        <AppHeader />
        <div className="card bg-light m-2">
          <div className="card-body">
            <div className="card-item p-2">
              <form>
                <div className="form-group mb-4">
                  <label htmlFor="company" className="col-sm-2">Company</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" onBlur={this.handleChange} id="formcompany" name="company" placeholder="Type the company's name" autoFocus required></input>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="website" className="col-sm-2">Website</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" onBlur={this.handleChange} id="formurl" name="website" placeholder="Type the website URL"></input>
                  </div>
                </div>
                <div className="form-group mb-5">
                  <label htmlFor="email" className="col-sm-2">e-Mail</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" onBlur={this.handleChange} id="formemail" name="email" placeholder="Type the main e-Mail"></input>
                  </div>
                </div>
                <div className="col-sm-10">
                  <button type="button" onClick={this.returnToList} className="btn btn-outline-danger mr-3">Cancel</button>
                  <button type="button" onClick={this.updateList} className="btn btn-outline-success">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {this.state.error &&
          <h3 className="error">{this.state.error}</h3>}
      </div>
    );
  }
}
