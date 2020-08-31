import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubmissionTable from '../submission/SubmissionTable';
import Request from '../request/RequestTable';
import SubmissionChart from '../submission/SubmissionChart';
import FamilyChart from '../family/FamilyChart';
import Count from './Count';

const Dashboard = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <div className="text-center md:text-left mb-6">
        <p className="text-xs uppercase text-gray-500">
          Keluarga Pra Sejahtera
        </p>
        <h1 className="text-4xl text-gray-700 leading-8">Dashboard</h1>
      </div>

      <div className="flex flex-wrap-reverse">
        <div className="flex-auto w-full xl:w-2/4 mb-8 xl:mr-6">
          <Request />
        </div>
        <div className="flex-auto xl:w-1/4 flex flex-row">
          <div className="mb-8 mr-6 w-1/2" style={{ maxWidth: '200px' }}>
            <Count params="pengajuan" />
          </div>
          <div className=" mb-8 w-1/2" style={{ maxWidth: '200px' }}>
            <Count params="family" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 col-gap-6 row-gap-8">
        <div className="col-span-12 sm:col-span-8 lg:col-span-8 ">
          <SubmissionChart />
        </div>
        <div className="col-span-12 sm:col-span-4 xl:col-span-4 ">
          <FamilyChart />
        </div>
        <div className="col-span-12">
          <SubmissionTable />
        </div>
        {/* <div className="col-span-12 lg:col-span-8 ">
        <FamilyTable />
      </div> */}
      </div>

      <Link
        to="/admin/submission/form"
        className="fixed flex px-4 py-4 text-white font-bold uppercase rounded-full shadow-2xl transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
        style={{
          right: '1rem',
          bottom: '3rem',
        }}
      >
        <i className="material-icons">add</i>
        <span>Pengajuan</span>
      </Link>
    </div>
  );
};

export default Dashboard;
