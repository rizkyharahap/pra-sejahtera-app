import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classname';
import { Link } from 'react-router-dom';
import { actionHandleSideBar, actionHandleMenu } from '../../../configs/redux/action';
import { ReactComponent as Logo } from '../../../assets/PraTelaLogo.svg';

const NavBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((states) => states.isMenuOpen);

  const handleSideBar = () => {
    // console.log('handleSideBar Clicked');
    dispatch(actionHandleSideBar(true));
  };

  const handleMenu = () => {
    // console.log('handleMenu Clicked');
    if (isMenuOpen) {
      return dispatch(actionHandleMenu(false));
    }
    return dispatch(actionHandleMenu(true));
  };

  return (
    <nav className="fixed w-full flex item-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 py-6 h-16 bg-gray-100 text-gray-700 border-b border-gray-300 z-10 shadow-lg">
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
          <Logo className="h-12 w-auto md:hidden" />
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
              'absolute md:static md:border-none rounded-lg md:flex md:justify-between bg-white md:bg-transparent overflow-hidden ease-out transition-all duration-300 z-30 translate-x-0',
              isMenuOpen ? 'block shadow-xl h-32' : 'h-0 md:h-auto',
            )}
            style={{ right: '1rem', top: '65px' }}
          >
            <button
              type="button"
              className="flex relative items-center p-3 font-medium m-2 text-center bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              <i className="material-icons">notifications_none</i>
              <span className="md:hidden ml-1 mr-2"> Notifikasi</span>
            </button>
            <Link
              to="/home"
              target="blank"
              className="flex items-center p-3 font-medium m-2 text-center bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              <i className="material-icons">home</i>
              <span className="md:hidden ml-1 mr-2">Hompage</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
