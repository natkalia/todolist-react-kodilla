import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id; 
  return {
    cards: getCardsForSearchResults(state.cards, props.match.params.id),
    searchString: id,
  };
};
    
export default connect(mapStateToProps)(SearchResults);