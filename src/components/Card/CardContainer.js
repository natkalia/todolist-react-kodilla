import {connect} from 'react-redux';
import Card from './Card';

const mapStateToProps = state => ({
  lists: state.lists,
  columns: state.columns,
});

export default connect(mapStateToProps)(Card);