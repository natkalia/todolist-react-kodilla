import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Search from '../Search/SearchContainer.js';

class Header extends React.Component {
  render() {
    return(
      <div className={styles.component}>
        <Container>
          <header className={styles.wrapper}>
            <Link 
              to='/'
              className={styles.logo}>
              <Icon name={settings.header.icon}/>
            </Link>
            <Search/>
            <nav className={styles.nav}>
              <NavLink 
                exact to='/' 
                activeClassName='active' 
                className={styles.navlink}>
                  Home
              </NavLink>
              <NavLink 
                exact to='/info' 
                activeClassName='active' 
                className={styles.navlink}>
                Info
              </NavLink>
              <NavLink 
                exact to='/faq' 
                activeClassName='active' 
                className={styles.navlink}>
                FAQ
              </NavLink>
            </nav>
          </header>
        </Container>
      </div>
    );
  }
}

export default Header;