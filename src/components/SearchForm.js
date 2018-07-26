import React, { Component } from 'react';
import { withRouter} from 'react-router';
import search from '../search.svg';


class SearchForm extends Component {

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
    let tag = this.keyword.value;
    let path = `/${tag}`;
    this.props.onSearch(tag);
    this.props.history.push(path);
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

export default withRouter(SearchForm);
