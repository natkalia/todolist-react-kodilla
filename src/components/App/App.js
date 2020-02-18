import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class App extends React.Component {
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
          <List key={listData.id} {...listData} />
        ))}

      </main>
    );
  }
}

export default App;