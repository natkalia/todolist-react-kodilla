import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import {pageContents, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class App extends React.Component {
  state = {
    // lists: this.props.lists || [],
    lists: [listData],
  }

  /* typechecking on the props for a component with prop-types library*/
  static propTypes = {
    lists: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
    image: settings.defaultListImage, 
  }
  
  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 1,
            title, // provided by user, transferred in argument
            description: this.props.description, // default: from settings
            image: this.props.image, // default: from settings
            columns: [], // deafult: empty
          },
        ],
      }
    ));
  }
    
  render() {
    return (
      <main className={styles.component}>

        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>

        <div className={styles.creator}>
          <Creator 
            text={settings.listCreatorText} 
            action={title => this.addList(title)}
          />
        </div>

        {/* <List {...listData} /> */}

        <div>
          {this.state.lists.map(({key, ...listProps}) => (
          <List key={key} {...listProps} />
          ))}
        </div>

      </main>
    )
  }
}

export default App;