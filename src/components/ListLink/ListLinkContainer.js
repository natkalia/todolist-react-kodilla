import {connect} from 'react-redux';
import ListLink from './ListLink';
import {createActionDeleteList} from '../../redux/listsRedux';

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  deleteList: listId => 
    dispatch(createActionDeleteList(listId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListLink);