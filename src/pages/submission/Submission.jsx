import React, { useState } from 'react';
import cx from 'classname';
import SubmissionForm from './SubmissionForm';
import SubmissionTable from './SubmissionTable';

const Submission = () => {
  const [newData, setNewData] = useState(false);

  const onNewDataClick = () => {
    setNewData(!newData);
  };

  return (
    <article>
      <div className="text-center md:text-left mb-6">
        <p className="text-xs uppercase text-gray-500">
          Keluarga Pra Sejahtera
        </p>
        <h1 className="text-4xl text-gray-700 leading-8">Pengajuan</h1>
      </div>

      <div className="grid grid-cols-5 gap-6">
        <div
          className={cx(
            newData ? 'block' : 'hidden',
            'lg:block col-span-5 lg:col-span-2',
          )}
        >
          <SubmissionForm />
        </div>

        <div className="col-span-5 lg:col-span-3">
          <SubmissionTable />
        </div>
      </div>

      <button
        type="button"
        onClick={onNewDataClick}
        className="lg:hidden flex fixed px-4 py-4 text-white font-bold uppercase rounded-full shadow-2xl transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
        style={{
          right: '1rem',
          bottom: '1rem',
        }}
      >
        <i className="material-icons">add</i>
        <span>Pengajuan Baru</span>
      </button>
    </article>
  );
};

export default Submission;
