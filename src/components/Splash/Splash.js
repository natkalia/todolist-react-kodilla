import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import styles from './Splash.scss';

class Splash extends React.Component {
  /* typechecking on the props for a component with prop-types library*/
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    addList: PropTypes.func,
  }
  
  render() {
    const {title, subtitle, addList} = this.props;
    return (
      <div className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.creator}>
          <Creator 
            text={settings.listCreatorText} 
            action={title => addList(title)}/>   
        </div>  
      </div>
    );
  }
}

export default Splash;