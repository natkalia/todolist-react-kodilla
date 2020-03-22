import {connect} from 'react-redux';
import Card from './Card';

import {createActionDeleteCard} from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  lists: state.lists,
  columns: state.columns,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCard: deletedCardId => 
    dispatch(createActionDeleteCard(deletedCardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);