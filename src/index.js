import React    from 'react';
import ReactDOM from 'react-dom';
import App1      from './components/App1.jsx';
import App2      from './components/App2.jsx';
import App3      from './components/App3.jsx';
import Header      from './components/common/Header.jsx';

// mount our App at #container
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App1}>
      <Route component={Header}></Route>
      <Route component={Product}></Route>
    </Route>
    <Route path='/login' component={App2}>
      <Route component={Header}></Route>
    </Route>
      <Route component={Header}></Route>
        <Route path='/profile' component={App3}>
      </Route>
  </Router>,

  document.querySelector('#root-container'));
