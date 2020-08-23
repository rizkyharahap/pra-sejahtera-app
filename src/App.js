import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import { store } from './configs/redux/redux';
import Client from './layouts/client/Client';
import Admin from './layouts/admin/Admin';

const App = () => {
  const hist = createBrowserHistory();

  return (
    <Provider store={store}>
      <BrowserRouter history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Client} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
