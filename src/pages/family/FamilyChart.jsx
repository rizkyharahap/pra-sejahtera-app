import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';
import { getDataFromAPI } from '../../configs/redux/action';

const FamilyChart = () => {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState({});

  const chartOptions = {
    legend: {
      position: 'bottom',
      labels: {
        padding: 10,
        boxWidth: 10,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: false,
    },
  };

  const chart = (datas, label) => {
    setChartData({
      title: 'Diagram Keluarga',
      labels: label,
      datasets: [
        {
          hoverBorderColor: '#ffffff',
          data: datas,
          backgroundColor: ['#38b2ac', '#f56565'],
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(getDataFromAPI('families')).then((res) => {
      const familyType = ['Sejahtera', 'Pra-Sejahtera'];
      let sejahteraCount = 0;
      let praSejahteraCount = 0;

      res.map((items) => {
        if (items.data.status === familyType[0]) {
          sejahteraCount += 1;
        } else {
          praSejahteraCount += 1;
        }

        return null;
      });

      const datas = [];
      datas.push(sejahteraCount, praSejahteraCount);

      // console.log('labels ', Months);
      // console.log('datas ', datas);

      chart(datas, familyType);
    });
  }, []);

  return (
    <div className="w-full h-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between font-semibold text-xl py-3 px-4 border-b border-gray-300">
        <span>Data Keluarga</span>
      </div>
      <div className="py-4 sm:px-0 xl:px-6">
        <Doughnut data={chartData} options={chartOptions} height="100%" width="100%" />
      </div>
    </div>
  );
};

export default FamilyChart;
