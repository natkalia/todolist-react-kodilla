import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imageSource}/>
  </header>
);

/* typechecking on the props for a component with prop-types library*/
Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageSource: PropTypes.string,
};

export default Hero;