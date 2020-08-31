import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';
import { getDataFromAPI } from '../../configs/redux/action';

const SubmissionChart = () => {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState({});

  const chartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 0,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: false,
          ticks: {
            callback(tick, index) {
              return index % 7 !== 0 ? '' : tick;
            },
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            suggestedMax: 10,
            callback(tick) {
              if (tick === 0) {
                return tick;
              }
              return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
            },
          },
        },
      ],
    },
    hover: {
      mode: 'nearest',
      intersect: false,
    },
    tooltips: {
      custom: false,
      mode: 'nearest',
      intersect: false,
    },
  };

  const chart = (datas, label) => {
    setChartData({
      labels: label,
      datasets: [
        {
          label: 'Jumlah Pengajuan',
          fill: 'start',
          data: datas,
          backgroundColor: 'rgba(236, 201, 75,0.4)',
          borderColor: '#cca218',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: '#ECC94B',
          borderWidth: 2,
          pointRadius: 2,
          pointHoverRadius: 3,
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(getDataFromAPI('submissions')).then((res) => {
      const Months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September'];
      const datas = [];

      let count = 0;

      Months.map((month, index) => {
        res.map((items) => {
          const date = new Date(items.data.tanggal).getMonth();

          if (date === index) {
            count += 1;
          }
        });

        datas.push(count);
        count = 0;
      });

      // console.log('labels ', Months);
      // console.log('datas ', datas);

      chart(datas, Months);
    });
  }, []);

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between font-semibold text-xl py-3 px-4 border-b border-gray-300">
        <span>Kurva Pengajuan</span>
      </div>
      <div className="p-4">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default SubmissionChart;
