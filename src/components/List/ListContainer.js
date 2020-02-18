import {connect} from 'react-redux';
import List from './List';
import {createActionAddColumn, getColumnsForList} from '../../redux/columnsRedux';

/* use imported filtering function to compare id of columns and 
corresponding list */
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

/* dispatch change to redux store after adding new column */
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);