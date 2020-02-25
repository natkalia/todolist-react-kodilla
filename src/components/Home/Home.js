import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink.js';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container.js';

class Home extends React.Component {
  /* typechecking on the props for a component with prop-types library*/
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
    description: PropTypes.string,
    image: PropTypes.string,
  }

  /* default value of prop if prop not provided */
  static defaultProps = {
    description: settings.defaultListDescription,
    image: settings.defaultListImage, 
  }
    
  render() {
    const {title, subtitle, lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <Container>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <div className={styles.creator}>
            <Creator 
              text={settings.listCreatorText} 
              action={title => addList(title)}
              // action={addList}
            />
          </div>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </Container>
      </main>
    );
  }
}

export default Home;