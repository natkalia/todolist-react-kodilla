import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Search from '../Search/Search.js';

class Header extends React.Component {
  render() {
    return(
      <div className={styles.component}>
        <Container>
          <header className={styles.wrapper}>
            <Link 
              to='/'
              className={styles.logo}
            >
              <Icon name={settings.header.icon}/>
            </Link>
            <Search/>
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
            <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
          </header>
        </Container>
      </div>
    );
  }
}

export default Header;