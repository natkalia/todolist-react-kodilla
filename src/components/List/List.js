import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  /* typechecking on the props for a component with prop-types library*/
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    children: PropTypes.node,
  }
  /* default value of prop if prop not provided */
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero 
          titleText={this.props.title}
          imageSource={this.props.image}
        />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='Work'/>
          <Column title='Home'/>
          <Column title='Sport'/>
        </div>
      </section>
    )
  }
}

export default List;
