import React from 'react';
import { Link } from 'react-router-dom';
import SubmissionTable from '../submission/SubmissionTable';
import FamilyTable from '../family/FamilyTable';

const Card = () => (
  <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-lg ">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
  </div>
);

const Dashboard = () => (
  <div>
    <div className="text-center md:text-left mb-6">
      <p className="text-xs uppercase text-gray-500">Keluarga Pra Sejahtera</p>
      <h1 className="text-4xl text-gray-700 leading-8">Dashboard</h1>
    </div>
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 lg:col-span-1">
        <Card />
      </div>
      <div className="col-span-3 lg:col-span-2">
        <SubmissionTable />
        {' '}
      </div>
      <div className="col-span-3 lg:col-span-2">
        <FamilyTable />
      </div>
      <div className="col-span-3 lg:col-span-1">
        <Card />
      </div>
    </div>

    <Link
      to="/admin/submission/form"
      className="fixed flex px-4 py-4 text-white font-bold uppercase rounded-full shadow-2xl transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
      style={{
        right: '1rem',
        bottom: '1rem',
      }}
    >
      <i className="material-icons">add</i>
      <span>Pengajuan</span>
    </Link>
  </div>
);
export default Dashboard;
