import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

/* typechecking on the props for a component with prop-types library*/
Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
