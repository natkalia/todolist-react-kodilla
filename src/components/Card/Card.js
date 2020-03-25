import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import CardLink from '../CardLink/CardLink';
import Icon from '../Icon/Icon';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    columnId: PropTypes.string,
    columns: PropTypes.array, 
    history: PropTypes.object, 
    deleteCard: PropTypes.func,
    editCard: PropTypes.func,
    id: PropTypes.string,
  }

  state = {
    value: this.props.title,
    disabled: true,
  }

  handleClickEditCard() {
    this.setState({
      disabled: false,
    });
  }

  handleClickCardInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleClickSaveCard(editCard, value) {
    this.setState({
      disabled: true,
      active: false,
    });
    editCard(value);
  }

  handleClickDeleteCard(deleteCard, cardId) {
    if (confirm('Are you sure you want to delete this card?')) {
      deleteCard(cardId);
    }
  }

  render() {
    const {title, columns, columnId, deleteCard, id, editCard} = this.props;
    const {pathname} = this.props.history.location;
    return (
      <section className={styles.component}>
        <div className={styles.cardWrapper}>
          <input
            className={ `${styles.title} ${this.state.disabled ? '' : styles.active} `} 
            min={2}
            max={15}
            disabled={(this.state.disabled) ? true : false}
            type='text'
            placeholder={title}
            value={this.state.value}
            onChange={(e) => this.handleClickCardInput(e)}
          />
          <div className={styles.icons}>
            <span
              className={styles.save}
              onClick={() => this.handleClickSaveCard(editCard, this.state.value)}>
              <Icon name='save' title={'Click to save'}/>
            </span>
            <span
              className={styles.edit}
              onClick={() => this.handleClickEditCard()}>
              <Icon name='edit' title={'Click to edit'}/>
            </span>
            <span
              className={styles.trash} 
              onClick={() => this.handleClickDeleteCard(deleteCard, id)}>
              <Icon name='trash' title={'Click to delete'} />
            </span>
          </div>
        </div>
        {pathname.includes('search') &&
          <CardLink columns={columns} columnId={columnId}/>
        }        
      </section>
    );
  }
}

export default withRouter(Card);
