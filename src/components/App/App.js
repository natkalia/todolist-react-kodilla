import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Faq from '../Faq/Faq';
import {AnimatedSwitch} from 'react-router-transition';
import styles from '../App/App.scss';
import List from '../List/ListContainer';
import SearchResults from '../SearchResults/SearchResultsContainer.js';
import NotFound from '../NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/search/:id' component={SearchResults} />
        <Route path='*' component={NotFound} />

      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;