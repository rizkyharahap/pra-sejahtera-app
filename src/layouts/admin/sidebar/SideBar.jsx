import React from 'react';
import cx from 'classname';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actionHandleSideBar, logoutUsersAPI } from '../../../configs/redux/action';
import SideBarItem from './SideBarItem';

const SideBar = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((states) => states.isSideBarOpen);

  const history = useHistory();

  const handleCloseSideBar = () => {
    // console.log('handleSideBar Clicked');
    dispatch(actionHandleSideBar(false));
  };

  const onLogout = async () => {
    // console.log('Logout');
    const res = await dispatch(logoutUsersAPI()).catch((err) => console.log(err));

    if (res) {
      return history.replace('/');
    }

    return alert(res);
  };

  return (
    <aside
      className={cx(
        'fixed md:block transform top-0 left-0 md:w-64 bg-white min-h-screen text-gray-700 overflow-hidden ease-out transition-all duration-300 z-30 translate-x-0 shadow-lg',
        isSideBarOpen ? 'w-64' : 'w-0',
      )}
    >
      <div className="flex justify-between mb-8 w-auto px-4 py-3 md:px-8 border-b border-gray-300">
        <header>
          <h1 className="ml-auto text-3xl leading-5 font-semibold text-teal-600">
            Pra-
            <br />
            <span className="text-teal-400 ml-3"> Sejahtera</span>
          </h1>
        </header>
        <button
          className="flex items-center md:hidden focus:outline-none"
          type="button"
          onClick={handleCloseSideBar}
        >
          <span className="material-icons">arrow_back_ios</span>
        </button>
      </div>

      <SideBarItem />

      <hr className="mx-2" />

      <button
        className="group flex items-center mt-6 px-12 hover:text-teal-600 focus:outline-none"
        type="button"
        onClick={onLogout}
      >
        <i className="mr-2 flex text-red-400 text-2xl items-center group-hover:text-red-600 material-icons">
          power_settings_new
        </i>
        <span className="group-hover:text-red-700 font-semibold">Logout</span>
      </button>

      <footer
        className="absolute flex items-center bottom-0 py-4 bg-gray-200 border-t border-gray-400"
      >
        <span
          className="w-64 text-center text-gray-600 text-xs"
          style={{ textShadow: '0px 0px 50px rgba(0,0,0,0.9)' }}
        >
          @2020, Made with Break Heart &#x1F494; in Jawa Tengah by Rizky Harahap
        </span>
      </footer>
    </aside>
  );
};

export default SideBar;
