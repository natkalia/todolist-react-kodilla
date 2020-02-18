import {connect} from 'react-redux';
import List from './List';

/* function to filter columns so that only those with proper id are shown on list */
export const getColumnsForList =
  ({columns}, listId) => 
    columns.filter(column => column.listId == listId);

/* use filtering function to compare id */
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(List);