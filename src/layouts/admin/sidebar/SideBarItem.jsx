import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cx from 'classname';
import { actionHandleSideBar } from '../../../configs/redux/action';

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
  // {
  //   href: '/admin/profile',
  //   icon: 'settings',
  //   title: 'Profile',
  // },
];

const SideBarItem = () => {
  const [active, setActive] = useState();
  const dispatch = useDispatch();

  const handleCloseSideBar = (titles) => {
    // console.log('handleSideBar Clicked');
    setActive(titles);
    dispatch(actionHandleSideBar(false));
  };

  return (
    <>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="w-64 group flex items-center mb-6 px-12"
          onClick={() => handleCloseSideBar(item.title)}
        >
          <i
            className={cx(
              'mr-2 flex text-gray-400 text-2xl items-center group-hover:text-teal-300 material-icons',
              active === item.title ? 'text-teal-300' : 'text-gray-400',
            )}
          >
            {item.icon}
          </i>
          <span
            className={cx(
              'group-hover:text-teal-600 font-semibold',
              active === item.title ? 'text-teal-600' : 'text-gray-700',
            )}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </>
  );
};

export default SideBarItem;
