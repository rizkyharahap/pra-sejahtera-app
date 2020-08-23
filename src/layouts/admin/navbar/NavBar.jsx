import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classname';
import { actionHandleSideBar, actionHandleMenu } from '../../../configs/redux/action';

const NavBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((states) => states.isMenuOpen);

  const handleSideBar = () => {
    console.log('handleSideBar Clicked');
    dispatch(actionHandleSideBar());
  };

  const handleMenu = () => {
    console.log('handleMenu Clicked');
    dispatch(actionHandleMenu());
  };

  return (
    <nav className="absolute w-full flex item-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 py-6 h-16 bg-white text-gray-700 border-b border-gray-300 z-10 shadow-sm">
      <div className="w-full flex items-center">
        <button
          className="mx-2 md:hidden focus:outline-none"
          aria-label="Open Menu"
          type="button"
          onClick={handleSideBar}
        >
          <i className="material-icons text-4xl">menu_open</i>
        </button>
        <div className="w-full flex items-center md:block justify-center">
          <img
            src="https://miskintheatre.co.uk/wp-content/uploads/2018/05/miskin-logo-k-100px-square-300x300.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>
        <div className="flex md:justify-between md:bg-transparent">
          <button
            className="mx-2 block md:hidden focus:outline-none"
            aria-label="Open Menu"
            type="button"
            onClick={handleMenu}
          >
            <i className="material-icons text-4xl">more_vert</i>
          </button>
          <div
            className={cx(
              'absolute md:static border border-gray-300 md:border-none rounded-lg md:flex md:justify-between bg-white md:bg-transparent',
              isMenuOpen ? 'block shadow-lg' : 'hidden',
            )}
            style={{ right: '1rem', top: '65px' }}
          >
            <button
              type="button"
              className="flex items-center p-3 font-medium m-2 text-center bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              <i className="material-icons">notifications_none</i>
              <span className="md:hidden mr-2"> Notification</span>
            </button>
            <button
              type="button"
              className="flex items-center p-3 font-medium m-2 text-center bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              <i className="material-icons">person_outline</i>
              <span className="md:hidden mr-2"> Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
