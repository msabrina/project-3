import React    from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

// mount our App at #container
ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.querySelector('#root-container')
);
