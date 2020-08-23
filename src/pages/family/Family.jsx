import React from 'react';
import FamilyTable from './FamilyTable';

const Family = () => (
  <article>
    <div className="text-center md:text-left mb-6">
      <p className="text-xs uppercase text-gray-500">Keluarga Pra Sejahtera</p>
      <h1 className="text-4xl text-gray-700 leading-8">Data Keluarga</h1>
    </div>

    <FamilyTable />

    <button
      type="button"
      className="fixed flex px-4 py-4 text-white font-bold uppercase rounded-full shadow-2xl bg-yellow-500 hover:bg-yellow-700 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 focus:outline-none"
      style={{
        right: '1rem',
        bottom: '1rem',
      }}
    >
      <i className="material-icons">add</i>
      <span>Keluarga Baru</span>
    </button>
  </article>
);

export default Family;
