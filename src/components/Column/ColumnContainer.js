import {connect} from 'react-redux';
import Column from './Column';
import {createActionAddCard, getCardsForColumn} from '../../redux/cardsRedux';

/* use imported filtering function to compare id of cards and 
corresponding column */
const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

/* dispatch change to redux store after adding new column */
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);