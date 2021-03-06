import {connect} from 'react-redux';
import Column from './Column';
import {createActionAddCard, getCardsForColumn} from '../../redux/cardsRedux';
import {createActionDeleteColumn, createActionEditColumn} from '../../redux/columnsRedux';

/* use imported filtering function to compare id of cards and 
corresponding column */
const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

/* dispatch change to redux store after adding new column
deleting existing column or editing existing column */
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
  deleteColumn: columnId => dispatch(createActionDeleteColumn(columnId)),
  editColumn: columnTitle => 
    dispatch(createActionEditColumn({
      title: columnTitle,
      id: props.id,
      listId: props.listId,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);