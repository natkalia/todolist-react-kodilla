import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  /* typechecking on the props for a component with prop-types library*/
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
  }

  state = {
    cards: this.props.cards || [],
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
              <Icon name={this.props.icon}/>
          </span>
          {this.props.title}
        </h3>

        <div className={styles.cards}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator 
            text={settings.cardCreatorText} 
            action={title => this.addCard(title)}
          />
        </div>
          
      </section>
    )
  }
}

export default Column;
