import React from 'react';
import styles from '../SearchResults/SearchResults.scss';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
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
          <div>
            {cards.length > 0 ? (
              <div>
                <h2 className={styles.intro}>Cards found!</h2>
                <div className={styles.cards}>
                  {cards.map(cardData => (
                    <Card key={cardData.id} {...cardData} />
                  ))}
                </div>
              </div>
            ) : (
              <h2 className={styles.intro}>Cards not found!</h2>
            )}
          </div>       
        </Container>
      </section>
    );
  }
}

export default SearchResults;