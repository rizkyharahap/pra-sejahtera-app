import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionHandleSideBar } from '../../../configs/redux/action';

const SideBarItem = ({
  href, icon, title, ...rest
}) => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((states) => states.isSideBarOpen);

  const handleCloseSideBar = () => {
    console.log('handleSideBar Clicked');
    dispatch(actionHandleSideBar(isSideBarOpen));
  };

  return (
    <Link
      key={title}
      to={href}
      className="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
      onClick={handleCloseSideBar}
    >
      <i className="mr-2 flex items-center material-icons">{icon}</i>
      <span>{title}</span>
    </Link>
  );
};

export default SideBarItem;
