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
      <div className="w-full relative">
        <NavBar />
        <main className="px-4 sm:px-5 md:px-6 lg:px-8 py-20 bg-gray-200 min-h-screen pt-20">
          {getRoutes}
        </main>
      </div>
    </div>
  );
};

export default Admin;
