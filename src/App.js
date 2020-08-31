import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { store } from './configs/redux/redux';
import Client from './layouts/client/Client';
import Admin from './layouts/admin/Admin';

const App = () => {
  const hist = createBrowserHistory();

  useEffect(() => {
    const elem = document.getElementById('SplashScreen');
    window.onload = () => {
      if (elem) {
        elem.remove();
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Client} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
