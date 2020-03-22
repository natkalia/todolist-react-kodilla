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
    id: PropTypes.string,
  }

  handleClickDelete(deleteCard, cardId) {
    if (confirm('Are you sure you want to delete this card?')) {
      deleteCard(cardId);
    }
  }

  handleEditCard() {
    // console.log('from handleEditCard in Card');
    alert('Sorry, this feature is in progress and not yet available!');
  }

  render() {
    const {title, columns, columnId, deleteCard, id} = this.props;
    const {pathname} = this.props.history.location;
    
    return (
      <section className={styles.component}>
        <span>{title}</span>
        <span>
          <a 
            className={styles.edit}
            onClick={() => this.handleEditCard()}>
            <Icon name='edit'/>
          </a>
          <a
            className={styles.delete} 
            onClick={() => this.handleClickDelete(deleteCard, id)}>
            <Icon name='trash' />
          </a>
        </span>

        {pathname.includes('search') &&
          <CardLink columns={columns} columnId={columnId}/>
        }        
        
      </section>
    );
  }
}

export default withRouter(Card);
