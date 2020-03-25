import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (<i title={props.title}className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

export default Icon;
