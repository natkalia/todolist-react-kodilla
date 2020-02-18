import {connect} from 'react-redux';
import App from './App';
import {createActionAddList} from '../../redux/listsRedux';


const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  columns: state.columns,
});

/* dispatch change to redux store after adding new list */
const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    id: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);