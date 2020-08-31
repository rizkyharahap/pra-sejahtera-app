import React, { useState, useEffect } from 'react';
import cx from 'classname';
import './Timeline.scss';
import { submissionType } from '../RequestSubmission/SubmissionData';

const Timeline = ({ step = 'self' }) => {
  const [state, setState] = useState();

  useEffect(() => {
    submissionType.map((item) => {
      if (item.name === step) {
        return setState(item.step);
      }
      return null;
    });
  }, []);

  return (
    <section id="timeline">
      <header className="text-center my-10 md:my-12">
        <h2 className="text-3xl px-4 sm:px-16  md:text-4xl font-bold text-teal-700">
          Langkah-Langkah Pengajuan
        </h2>
      </header>

      {state !== undefined ? (
        <ol className="timeline px-4 sm:px-16 md:px-24 lg:px-32 xl:px-64 relative ">
          {state.map((item, index) => (
            <div
              key={index}
              className={cx(
                'timeline-item flex items-center w-full mb-6',
                item.number % 2 ? 'flex-row' : ' flex-row-reverse',
              )}
            >
              <div
                className={cx(
                  'timeline-img p-3 text-white absolute rounded-full -ml-4',
                  step === 'self'
                    ? 'bg-teal-400'
                    : step === 'neighbour'
                      ? 'bg-red-400'
                      : 'bg-yellow-500',
                  item.number % 2 ? 'timeline-img-left' : 'timeline-img-right',
                )}
              >
                {item.number}
              </div>
              <li
                className={cx(
                  'w-5/12 py-3 px-4 md:py-3 md:px-6 relative rounded-lg text-white  shadow-lg transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 ',
                  step === 'self'
                    ? 'bg-teal-400'
                    : step === 'neighbour'
                      ? 'bg-red-400'
                      : 'bg-yellow-500',
                )}
              >
                <span>{item.description}</span>
              </li>
            </div>
          ))}
        </ol>
      ) : null}
    </section>
  );
};

export default Timeline;
