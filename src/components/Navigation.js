import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = props =>

  <nav className="main-nav">
    <ul>
      {props.categories.map((category, index) =>
        <li key={index}>
          <Link to={`/search/${category.name.toLowerCase()}`}>{category.name}</Link>
        </li>
      )}
    </ul>
  </nav>

Navigation.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Navigation;
