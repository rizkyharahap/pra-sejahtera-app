import React, { useEffect, useState } from 'react';
import cx from 'classname';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromAPI } from '../../configs/redux/action';
import { ReactComponent as Logo } from '../../assets/icons/Ball-Animated.svg';

const SubmissionTable = () => {
  const dispatch = useDispatch();
  const submissions = useSelector((state) => state.submissions);
  const loadings = useSelector((loading) => loading.isLoading);

  const [colapse, setColapse] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await dispatch(getDataFromAPI('submissions')).catch((err) => alert(err));
    };

    getData();
  }, []);

  // const onUpdateClick = (data) => {
  //   console.log('Update click on :', data);
  // };

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between font-semibold text-xl py-3 px-4 border-b border-gray-300">
        <span>Data Pengajuan</span>
        <div className="flex flex-row">
          <button
            type="button"
            className="flex items-center flex-row h-6 mx-2 transition duration-500 ease-in-out text-gray-500 hover:text-gray-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
            onClick={() => setColapse(!colapse)}
          >
            <span className="text-sm mr-2">Tampilkan Foto</span>
            <i className="material-icons">add_a_photo</i>
          </button>
          <button
            type="button"
            className="h-6 mx-2 transition duration-500 ease-in-out text-gray-500 hover:text-gray-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
          >
            <i className="material-icons">print</i>
          </button>
        </div>
      </div>

      <div
        className="overflow-auto relative"
        style={{ minHeight: '40vh', maxHeight: '60vh' }}
      >
        <div
          className={cx(
            'w-full h-full absolute flex items-center justify-center bg-white bg-opacity-75 top-0 right-0',
            !loadings ? 'hidden' : 'block',
          )}
        >
          <div>
            <Logo className="w-20 h-20" />
            <span className="font-semibold text-gray-700">Loading...</span>
          </div>
        </div>

        <table className="table-auto w-full text-center">
          <thead className="border-b border-gray-300">
            <tr className="bg-gray-200">
              {/* <th className="p-3 font-semibold" style={{ minWidth: '6rem' }}>
                ACTIONS
              </th> */}
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '6rem' }}
              >
                Status
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '6rem' }}
              >
                Jenis Pengajuan
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '6rem' }}
              >
                No. KK
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '6rem' }}
              >
                Pekerjaan
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '6rem' }}
              >
                Pendapatan
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '6rem' }}
              >
                PBB
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '6rem' }}
              >
                Tanggal Pengajuan
              </th>
            </tr>
          </thead>

          {submissions.length > 0 ? (
            <tbody>
              {submissions.map((data, index) => (
                <React.Fragment key={index}>
                  <tr className="border-b border-gray-300">
                    {/* <td className="p-2">
                    <button
                      className="px-1 transition duration-500 ease-in-out text-yellow-500 hover:text-yellow-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
                      onClick={() => onUpdateClick(data)}
                    >
                      <i className="material-icons text-3xl">edit</i>
                    </button>
                    <button className="px-1 transition duration-500 ease-in-out text-red-500 hover:text-red-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
                      <i className="material-icons text-3xl">delete</i>
                    </button>
                  </td> */}
                    <td className="p-2">
                      <span
                        className={cx(
                          'inline-block rounded-full px-3 py-1 text-center text-sm font-semibold text-white',
                          data.data.status === 'Proses'
                            ? 'bg-yellow-500'
                            : data.data.status === 'Diterima'
                              ? 'bg-green-500'
                              : data.data.status === 'Diterima'
                                ? 'bg-red-500'
                                : 'bg-gray-700',
                        )}
                      >
                        {data.data.status}
                      </span>
                    </td>

                    <td className="p-2">
                      {' '}
                      <span
                        className={cx(
                          'px-2 py-1 rounded-full text-white text-xs',
                          data.data.jenisPengajuan === 'Pengajuan'
                            ? 'bg-teal-500'
                            : 'bg-red-500 ',
                        )}
                      >
                        {data.data.jenisPengajuan}
                      </span>
                    </td>

                    <td className="p-2">{data.data.noKK}</td>
                    <td className="p-2">{data.data.pekerjaan}</td>
                    <td className="p-2">{data.data.pendapatan}</td>
                    <td className="p-2">{data.data.pbb}</td>
                    <td className="p-2">
                      {new Date(data.data.tanggal).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <div
                        className={cx(
                          'w-full overflow-hidden ease-out transition-all duration-300 z-30 translate-x-0',
                          colapse ? 'h-56' : 'h-0',
                        )}
                      >
                        <img src={data.data.fotoRumah} alt={data.data.noKK} />
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>

      <div className="py-1 px-4 text-xs">
        <span className="legend-pengajuan mr-2">Pengajuan</span>
        <span className="legend-pencopotan mr-2">Pencopotan</span>
      </div>
    </div>
  );
};

export default SubmissionTable;
