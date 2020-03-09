import React from 'react';
import styles from '../SearchResults/SearchResults.scss';
import Card from '../Card/CardContainer';
import Container from '../Container/Container';
import PropTypes from 'prop-types';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
  }

  render() {
    const {cards} = this.props;
    this.props.changeSearchString(this.props.searchString);
    return (
      <section className={styles.component}>
        <Container>
          <>
            {cards.length > 0 ? (
              <>
                <h2 className={styles.intro}>Cards found!</h2>
                <div className={styles.cards}>
                  {cards.map(cardData => (
                    <Card key={cardData.id} {...cardData}/>
                  ))}
                </div>
              </>
            ) : (
              <h2 className={styles.intro}>Cards not found!</h2>
            )}
          </>       
        </Container>
      </section>
    );
  }
}

export default SearchResults;