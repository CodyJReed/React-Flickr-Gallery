import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props =>

  <nav className="main-nav">
    <ul>
      {props.catagories.map((catagory, index) =>
        <li key={index}>
          <a>{catagory.name}</a>
        </li>
      )}
    </ul>
  </nav>

Navigation.propTypes = {
  catagories: PropTypes.array.isRequired
}

export default Navigation;
