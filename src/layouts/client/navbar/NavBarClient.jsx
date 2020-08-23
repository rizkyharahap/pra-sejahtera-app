import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classname';
import { Link } from 'react-router-dom';
import {
  actionHandleMenu,
} from '../../../configs/redux/action';

const NavBarClient = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((states) => states.isMenuOpen);

  const handleMenu = () => {
    console.log('handleMenu Clicked');
    dispatch(actionHandleMenu());
  };

  return (
    <header
      className={cx(
        'absolute w-full flex items-center justify-between flex-wrap py-2 px-6 sm:px-16 md:px-24 lg:px-32 xl:px-40 z-10',
        isMenuOpen
          ? 'bg-teal-400 text-gray-200'
          : 'bg-transparent text-gray-700',
      )}
    >
      {/* <button
        className="mx-2 md:hidden focus:outline-none"
        aria-label="Open Menu"
        type="button"
        onClick={handleMenu}
      >
        <i className="material-icons">arrow_back</i>
      </button> */}
      <div className="flex items-center justify-center flex-shrink-0">
        <Link
          to="/home"
          className="flex items-center transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110"
        >
          <img
            src="https://miskintheatre.co.uk/wp-content/uploads/2018/05/miskin-logo-k-100px-square-300x300.png"
            alt="Logo"
            className="h-12 w-auto mr-3"
          />
          <span className="hidden md:block font-semibold text-xl tracking-tight ">
            Pra Sejahtera
          </span>
        </Link>
      </div>
      <button
        className="md:hidden mx-2 focus:outline-none"
        aria-label="Open Menu"
        type="button"
        onClick={handleMenu}
      >
        <i className="material-icons text-4xl">menu_open</i>
      </button>

      <div
        className={cx(
          'w-full block flex-grow md:flex md:items-center md:w-auto',
          isMenuOpen ? 'block' : 'hidden',
        )}
      >
        <div className="text-sm items-center md:flex md:justify-end md:flex-grow">
          <a
            href="#responsive-header"
            className="block pt-3 pb-1 md:p-0 md:mt-0 hover:text-teal-800 mr-6 text-lg font-semibold border-b border-teal-500 md:border-none transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block pt-3 pb-1 md:p-0 md:mt-0 hover:text-teal-800 mr-6 text-lg font-semibold border-b border-teal-500 md:border-none transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
          >
            Examples
          </a>
          <Link
            to="/login"
            className="flex items-center md:bg-teal-500 md:px-4 py-1 rounded-full text-gray-200 text-lg mt-4 md:mt-0 hover:text-white hover:bg-teal-400 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
          >
            <i className="material-icons">login</i>
            <span className="ml-2">Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBarClient;
