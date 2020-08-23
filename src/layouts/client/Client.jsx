import React from 'react';
// import { Outlet } from 'react-router';
import { Switch, Route, Redirect } from 'react-router';
import NavBarClient from './navbar/NavBarClient';
import Footer from './footer/Footer';
import { clientRoutes } from '../../routes';

const getRoutes = (
  <Switch>
    {clientRoutes.map((props, index) => (
      <Route
        key={index}
        exact={props.exact}
        path={props.path}
        component={props.component}
      />
    ))}
    <Redirect from="/" to="/home" />
  </Switch>
);

function Client() {
  return (
    <>
      <NavBarClient />
      {getRoutes}
      <Footer />
    </>
  );
}

export default Client;
