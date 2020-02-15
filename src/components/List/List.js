import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  /* typechecking on the props for a component with prop-types library*/
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  /* default value of prop if prop not provided */
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero 
          titleText={this.props.title}
          imageSource={this.props.image}
        />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
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
