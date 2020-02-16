import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }

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

   addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
    // console.log(this.state);
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
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator 
            text={settings.columnCreatorText} 
            action={title => this.addColumn(title)}
          />
        </div>

      </section>
    )
  }
}

export default List;
