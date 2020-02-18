import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  /* typechecking on the props for a component with prop-types library*/
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    console.log(this.props.title);
    return (
      <section className={styles.component}>
        <p>{this.props.title}</p>
      </section>
    );
  }
}

export default Card;
