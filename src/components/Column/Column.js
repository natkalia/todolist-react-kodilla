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
    editColumn: PropTypes.func,
    id: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  state = {
    value: this.props.title,
    disabled: true,
    cards: this.props.cards,
  }

  handleClickEditColumn() {
    this.setState({
      disabled: false,
    });
  }

  handleClickColumnInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleClickSaveColumn(editColumn, value) {
    this.setState({
      disabled: true,
      active: false,
    });
    editColumn(value);
  }

  handleClickDeleteColumn(deleteColumn, columnId) {
    if(confirm('Are you sure you want to delete this column?')) {
      deleteColumn(columnId);
    }
  }

  // sort cards alphabetically and rerender
  handleClickSort(cards) {
    if(confirm('Are you sure you want to sort cards alphabetically?')) {
      this.setState({
        cardsInColumn: cards.sort((a, b) => (a.title > b.title) ? 1 : -1),
      });
    }
  }

  render() {
    const {title, icon, cards, addCard, deleteColumn, editColumn, id} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} title={''}/>
          </span>
          <input
            className={ `${styles.title} ${this.state.disabled ? '' : styles.active} `} 
            min={2}
            max={10}
            disabled={(this.state.disabled) ? true : false}
            type='text'
            placeholder={title}
            value={this.state.value}
            onChange={e => this.handleClickColumnInput(e)}
          />
          <span 
            onClick = {() => this.handleClickSort(cards)}
            className={styles.sort}>
            <Icon name='sort' title={'Click to sort alphabetically'}/>
          </span>
          <span 
            onClick = {() => this.handleClickSaveColumn(editColumn, this.state.value)}
            className={styles.save}>
            <Icon name='save' title={'Click to save'}/>
          </span>
          <span 
            onClick = {() => this.handleClickEditColumn()}
            className={styles.edit}>
            <Icon name='edit' title={'Click to edit'}/>
          </span>
          <span 
            onClick = {() => this.handleClickDeleteColumn(deleteColumn, id)}
            className={styles.trash}>
            <Icon name='trash' title={'Click to delete'}/>
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
