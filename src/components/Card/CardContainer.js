import {connect} from 'react-redux';
import Card from './Card';
import {createActionDeleteCard, createActionEditCard} from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  lists: state.lists,
  columns: state.columns,
});

const mapDispatchToProps = (dispatch, props) => ({
  deleteCard: cardId => 
    dispatch(createActionDeleteCard(cardId)),
  editCard: cardTitle => 
    dispatch(createActionEditCard({
      title: cardTitle,
      id: props.id,
      columnId: props.columnId,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);