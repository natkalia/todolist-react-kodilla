import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.title)}</h2>
    <img className={styles.image} src={props.image}/>
  </header>
);

/* typechecking on the props for a component with prop-types library*/
Hero.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
};

export default Hero;