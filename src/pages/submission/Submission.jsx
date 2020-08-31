import React, { useState, useEffect } from 'react';
import cx from 'classname';
import { useParams } from 'react-router';
import SubmissionForm from './SubmissionForm';
import SubmissionTable from './SubmissionTable';
import './Submission.scss';
import SubmissionChart from './SubmissionChart';
import Count from '../dashboard/Count';

const Submission = () => {
  const { params } = useParams();
  const [newData, setNewData] = useState(params);

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
        <h1 className="text-4xl text-gray-700 leading-8">Pengajuan</h1>
      </div>

      <div className={cx('mb-8 max-w-2xl', newData ? 'block' : 'hidden')}>
        <SubmissionForm />
      </div>

      <div className="flex flex-wrap-reverse">
        <div className="w-full max-w-2xl mr-6 mb-8">
          <SubmissionChart />
        </div>
        <div className="w-1/2 sm:w-48 mb-8">
          <Count params="pengajuan" />
        </div>
      </div>

      <article>
        <SubmissionTable />
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
        <span>Pengajuan Baru</span>
      </button>
    </section>
  );
};

export default Submission;
