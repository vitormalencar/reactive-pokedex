/* eslint-disable import/default */
import React from 'react';
// import routes from './routes';
import {render} from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// configureFiles
require('./favicon.ico');
import './assets/styles/main.sass';
// import configureStore from './store/configureStore';

// Components
import Header from './components/Header';
import MonsterGrid from './components/MonsterGrid';

// const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);

render(
  <span>
  <Header/>
  <MonsterGrid/>
  </span>,
  document.getElementById('app')
);
