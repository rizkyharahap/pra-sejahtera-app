import React from 'react';
import cx from 'classname';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actionHandleSideBar, logoutUsersAPI } from '../../../configs/redux/action';
import SideBarItem from './SideBarItem';

const items = [
  {
    href: '/admin/dashboard',
    icon: 'dashboard',
    title: 'Dashboard',
  },
  {
    href: '/admin/family',
    icon: 'family_restroom',
    title: 'Data Keluarga',
  },
  {
    href: '/admin/submission',
    icon: 'sticky_note_2',
    title: 'Pengajuan',
  },
  {
    href: '/admin/profile',
    icon: 'settings',
    title: 'Profile',
  },
];

const SideBar = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((states) => states.isSideBarOpen);

  const history = useHistory();

  const handleCloseSideBar = () => {
    console.log('handleSideBar Clicked');
    dispatch(actionHandleSideBar());
  };

  const onLogout = async () => {
    console.log('Logout');
    const res = await dispatch(logoutUsersAPI()).catch((err) => alert(err));

    if (res) {
      return history.replace('/');
    }
  };

  return (
    <aside
      className={cx(
        'absolute md:static md:block transform top-0 left-0 w-56 bg-white min-h-screen overflow-auto ease-out transition-all duration-300 z-30 translate-x-0 shadow-md',
        isSideBarOpen ? 'block' : 'hidden',
      )}
    >
      <span className="flex w-auto items-center p-2">
        <img
          src="https://miskintheatre.co.uk/wp-content/uploads/2018/05/miskin-logo-k-100px-square-300x300.png"
          alt="Logo"
          className="md:invisible h-12 w-auto mx-auto "
        />
        <button
          className="flex items-center md:hidden focus:outline-none"
          type="button"
          onClick={handleCloseSideBar}
        >
          <span className="material-icons">arrow_back_ios</span>
        </button>
      </span>

      {items.map((item) => (
        <SideBarItem
          href={item.href}
          key={item.title}
          title={item.title}
          icon={item.icon}
        />
      ))}

      <hr className="mx-2" />

      <button
        className="w-full flex items-center p-4 hover:bg-indigo-500 hover:text-white focus:outline-none"
        type="button"
        onClick={onLogout}
      >
        <i className="mr-2 flex items-center material-icons">
          power_settings_new
        </i>
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default SideBar;
