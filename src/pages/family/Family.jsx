import React, { useState, useEffect } from 'react';
import cx from 'classname';
import FamilyTable from './FamilyTable';
import FamilyChart from './FamilyChart';
import FamilyForm from './FamilyForm';
import Count from '../dashboard/Count';

const Family = () => {
  const [newData, setNewData] = useState(false);

  const onNewDataClick = () => {
    setNewData(!newData);
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section>
      <div className="text-center md:text-left mb-6">
        <p className="text-xs uppercase text-gray-500">
          Keluarga Pra Sejahtera
        </p>
        <h1 className="text-4xl text-gray-700 leading-8">Data Keluarga</h1>
      </div>

      <div className="flex flex-wrap">
        <div
          className={cx(
            'sm:mr-6 mb-8 w-full max-w-2xl',
            newData ? 'block' : 'hidden',
          )}
        >
          <FamilyForm />
        </div>

        <div className="flex flex-wrap-reverse">
          <div className="w-full sm:w-72 sm:mr-6 mb-8">
            <FamilyChart />
          </div>
          <div className="w-48  mb-8">
            <Count params="family" />
          </div>
        </div>
      </div>

      <article className="w-full">
        <FamilyTable />
      </article>

      <button
        type="button"
        onClick={onNewDataClick}
        className="flex fixed px-4 py-4 text-white font-bold uppercase rounded-full shadow-2xl transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
        style={{
          right: '1rem',
          bottom: '3rem',
        }}
      >
        <i className="material-icons">add</i>
        <span>Keluarga Baru</span>
      </button>
    </section>
  );
};

export default Family;
