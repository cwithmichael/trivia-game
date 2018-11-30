import React, { Component } from 'react';
import '../App.css';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   event.preventDefault();
 }
  render() {
    console.log(this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label className="categoryLabel"> <h3>Choose a Category</h3> </label>
        <select className="form-control" value={this.state.value} onChange={this.handleChange}>
          <option value="Sports">Sports</option>
          <option value="Music">Music</option>
        </select>
        </div>
        </form>
    )
  }
}

export default CategoryForm;
