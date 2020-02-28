import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';
import {
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id; 
  return {
    cards: getCardsForSearchResults(state.cards, props.match.params.id),
    searchString: id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => 
    dispatch(createAction_changeSearchString(newSearchString)),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);