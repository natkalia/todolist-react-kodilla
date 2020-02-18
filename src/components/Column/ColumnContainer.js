import {connect} from 'react-redux';
import Column from './Column';

/* function to filter cards so that only those with proper id are shown on column */
export const getCardsForColumn =
  ({cards}, columnId) => 
    cards.filter(card => card.columnId == columnId);

/* use filtering function to compare id */
const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});


export default connect(mapStateToProps)(Column);