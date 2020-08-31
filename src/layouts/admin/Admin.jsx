import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router';
import { adminRoutes } from '../../routes';
import SideBar from './sidebar/SideBar';
import NavBar from './navbar/NavBar';

const getRoutes = (
  <Switch>
    {adminRoutes.map((props, index) => (
      <Route
        key={index}
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    ))}
  </Switch>
);

const Admin = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData === null) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="flex min-h-screen">
      <SideBar />
      <NavBar />
      <main
        className="w-full text-gray-700 px-4 sm:px-5 md:pl-64 md:pr-6 py-32 bg-gray-200"
        style={{ minHeight: '94vh' }}
      >
        {getRoutes}
      </main>
    </div>
  );
};

export default Admin;
