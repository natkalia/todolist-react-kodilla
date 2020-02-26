import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = props => {
  return (
    <div className={styles.component}>
      {props.children}
    </div>
  );
};

/* typechecking on the props for a component with prop-types library*/
Container.propTypes = {
  children: PropTypes.node,
};

export default Container;