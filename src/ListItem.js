import React, { Component } from 'react';
import AppHeader from './AppHeader';
import ListView from './ListView'
import UId from 'cuid';
import 'bootstrap/dist/css/bootstrap.css';

var lsListing = [];

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      company: '',
      website: '',
      email: '',
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    lsListing = JSON.parse(localStorage.getItem("MyList21051969"));
    this.setState({
      list: lsListing
    });
    const idx = lsListing.findIndex(i => i.id === this.props.match.params.id);
    this.setState({
      company: lsListing[idx].company,
      website: lsListing[idx].website,
      email: lsListing[idx].email
    });
  }

  deleteItem() {
    const idx = lsListing.findIndex(i => i.id === this.props.match.params.id);
    lsListing.splice(idx, 1);
    localStorage.setItem("MyList21051969", JSON.stringify(lsListing));
    lsListing = localStorage.getItem("MyList21051969");
    this.setState({ list: JSON.parse(lsListing) });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
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

      this.deleteItem();
      var listing = this.state.list;
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
                    <input type="text" value={this.state.company} className="form-control" onChange={this.handleChange} id="formcompany" name="company" placeholder="Type the company's name" autoFocus required></input>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="website" className="col-sm-2">Website</label>
                  <div className="col-sm-10">
                    <input type="text" value={this.state.website} className="form-control" onChange={this.handleChange} id="formurl" name="website" placeholder="Type the website URL"></input>
                  </div>
                </div>
                <div className="form-group mb-5">
                  <label htmlFor="email" className="col-sm-2">e-Mail</label>
                  <div className="col-sm-10">
                    <input type="email" value={this.state.email} className="form-control" onChange={this.handleChange} id="formemail" name="email" placeholder="Type the main e-Mail"></input>
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
