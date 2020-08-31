import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as WaveBottom } from '../../assets/images/wave-bottom.svg';

const Count = ({ params }) => {
  const submissions = useSelector((state) => state.submissions);
  const families = useSelector((state) => state.families);

  return (
    <div className="relative w-full h-40 bg-white rounded-lg shadow-lg text-center overflow-hidden">
      <h3 className="text-base font-semibold text-gray-500 px-3 mt-6">
        {params === 'pengajuan' ? 'Pengajuan' : 'Keluarga'}
      </h3>
      <p className="text-6xl -mt-4">
        {params === 'pengajuan' ? submissions.length : families.length}
      </p>
      <WaveBottom
        fill={params === 'pengajuan' ? '#ECC94B' : '#4FD1C5'}
        className="absolute bottom-0 h-16"
      />
    </div>
  );
};

export default Count;
