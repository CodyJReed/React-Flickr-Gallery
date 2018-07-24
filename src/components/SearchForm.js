import React, { Component } from 'react';
import search from '../search.svg';


export default class SearchForm extends Component {

  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({
      searchText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.keyword.value);
    e.currentTarget.reset();
  }

  render() {
    return (
    <form className={"search-form"} onSubmit={this.handleSubmit}>
      <input type="search"
             onChange={this.onSearchChange}
             ref={(input) => this.keyword = input}
             placeholder="Search" />
      <button type="submit">
        <img src={search} alt="Search Icon" />
      </button>
    </form>
   );
  }
}
