import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classname';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { actionHandleMenu } from '../../../configs/redux/action';
import { ReactComponent as Logo } from '../../../assets/PraTelaLogo.svg';

const NavBarClient = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const isMenuOpen = useSelector((states) => states.isMenuOpen);

  const handleMenu = () => {
    // console.log('handleMenu Clicked');
    if (isMenuOpen) {
      return dispatch(actionHandleMenu(false));
    }
    return dispatch(actionHandleMenu(true));
  };

  const handleCloseMenu = () => {
    // console.log('handleSideBar Clicked');
    dispatch(actionHandleMenu(false));
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setState(true);
    } else if (window.pageYOffset === 0) {
      setState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cx(
        'fixed w-full flex items-center h-auto text-gray-700 justify-between flex-wrap py-2 px-6 sm:px-16 md:px-24 lg:px-32 xl:px-40 overflow-hidden ease-out transition-all duration-300 z-30 translate-x-0',
        isMenuOpen ? 'bg-gray-100 text-gray-200 shadow-lg' : null,
        !state ? 'bg-transparent' : 'bg-gray-100 shadow-md',
      )}
    >
      <div className="flex items-center justify-center flex-shrink-0">
        <Link
          to="/home"
          className="flex items-center transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110"
        >
          <Logo className="h-12 md:h-16 w-auto" />
        </Link>
      </div>

      <button
        className="md:hidden mx-2 focus:outline-none"
        style={{ height: 36 }}
        aria-label="Open Menu"
        type="button"
        onClick={handleMenu}
      >
        {!isMenuOpen ? (
          <i className="material-icons text-4xl">menu_open</i>
        ) : (
          <i className="material-icons text-4xl">close</i>
        )}
      </button>

      <div
        className={cx(
          'w-full block flex-grow md:flex md:items-center md:w-auto',
          isMenuOpen ? 'block' : 'hidden',
        )}
      >
        <div className="text-sm items-center md:flex md:justify-end md:flex-grow">
          <HashLink
            to="/home/#home"
            onClick={handleCloseMenu}
            className="block pt-3 pb-1 md:p-0 md:mt-0 hover:text-teal-800 mr-6 text-lg font-semibold border-b border-gray-400 md:border-none transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
          >
            Home
          </HashLink>
          <HashLink
            to="/home/#service"
            onClick={handleCloseMenu}
            className="block pt-3 pb-1 md:p-0 md:mt-0 hover:text-teal-800 mr-6 text-lg font-semibold border-b border-gray-400 md:border-none transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
          >
            Layanan
          </HashLink>

          <HashLink
            to="/home/#timeline"
            onClick={handleCloseMenu}
            className="block pt-3 pb-1 md:p-0 md:mt-0 hover:text-teal-800 mr-6 text-lg font-semibold border-b border-gray-400 md:border-none transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
          >
            Panduan
          </HashLink>

          <HashLink
            to="/home/#contact"
            onClick={handleCloseMenu}
            className="block pt-3 pb-1 md:p-0 md:mt-0 hover:text-teal-800 mr-6 text-lg font-semibold border-b border-gray-400 md:border-none transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
          >
            Kontak
          </HashLink>
          <Link
            to="/login"
            onClick={handleCloseMenu}
            className="flex items-center font-semibold md:font-normal md:bg-teal-500 md:px-4 py-1 rounded-full text-gray-700 md:text-gray-200 text-lg mt-4 md:mt-0 hover:text-white hover:bg-teal-400 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
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
