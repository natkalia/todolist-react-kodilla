import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink.js';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';
import Splash from '../Splash/Splash.js';

class Home extends React.Component {
  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    addList: PropTypes.func,
  }

  render() {
    const {title, subtitle, addList, lists} = this.props;
    return (
      <main className={styles.component}>
        <Container>
          <Splash title={title} subtitle={subtitle} addList={addList}/>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </Container>
      </main>
    );
  }
}

export default Home;