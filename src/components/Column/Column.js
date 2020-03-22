import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/CardContainer';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
    deleteColumn: PropTypes.func,
    id: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  handleClickDeleteColumn(deleteColumn, columnId) {
    if(confirm('Are you sure you want to delete this column?')) {
      deleteColumn(columnId);
    }
  }

  render() {
    const {title, icon, cards, addCard, deleteColumn, id} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
          <span>{title}</span>
          <span 
            onClick = {() => this.handleClickDeleteColumn(deleteColumn, id)}
            className={styles.trash}>
            <Icon name='trash'/>
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator 
            text={settings.cardCreatorText} 
            action={title => addCard(title)}
          />
        </div> 
      </section>
    );
  }
}

export default Column;
