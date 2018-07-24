import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props =>

  <nav className="main-nav">
    <ul>
      {props.categories.map((category, index) =>
        <li key={index}>
          <a>{category.name}</a>
        </li>
      )}
    </ul>
  </nav>

Navigation.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Navigation;
