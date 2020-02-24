import {connect} from 'react-redux';
import List from './List';
import {createActionAddColumn, getColumnsForList} from '../../redux/columnsRedux';

/* use imported filtering function to compare id of columns and 
corresponding list */
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  /* returns array with list that pass the test of having id from url */
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};
  return {
    columns: getColumnsForList(state, id),
    ...listParams,
  };
};

/* dispatch change to redux store after adding new column */
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);