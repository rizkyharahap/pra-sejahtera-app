import React, { useEffect } from 'react';
import cx from 'classname';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromAPI } from '../../configs/redux/action';
import { ReactComponent as Logo } from '../../assets/icons/Ball-Animated.svg';

const SubmissionTable = () => {
  const dispatch = useDispatch();
  const submissions = useSelector((state) => state.submissions);
  const loadings = useSelector((loading) => loading.isLoading);

  useEffect(() => {
    const getData = async () => {
      await dispatch(getDataFromAPI('submissions')).catch((err) => console.log(err));
    };

    getData();
  }, []);

  const onUpdateClick = (data) => {
    console.log('Update click on :', data);

    // dispatch({ type: 'SET_SUBMISSIONS', value: data });
  };

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg py-4">
      <div className="flex items-center justify-between font-bold text-xl mb-3 border-b border-gray-300 leading-relaxed px-4">
        <span>Tabel Pengajuan</span>
        <button className="px-1 transition duration-500 ease-in-out text-gray-500 hover:text-gray-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
          <i className="material-icons">print</i>
        </button>
      </div>

      <div className="overflow-scroll relative" style={{ height: '60vh' }}>
        <div
          className={cx(
            'w-full h-full absolute z-50 flex items-center justify-center bg-white bg-opacity-75 top-0 right-0',
            !loadings ? 'hidden' : 'block',
          )}
        >
          <div>
            <Logo className="w-20 h-20" />
            <span className="font-semibold text-gray-700">Loading...</span>
          </div>
        </div>

        <table className="table-auto w-full text-center">
          <thead className="border-b border-gray-400">
            <tr className="bg-gray-200">
              <th className="p-3" style={{ minWidth: '6rem' }}>
                ACTIONS
              </th>
              <th className="p-3" style={{ minWidth: '6rem' }}>
                NO KK
              </th>
              <th className="p-3" style={{ minWidth: '6rem' }}>
                NIK
              </th>
              <th className="p-3" style={{ minWidth: '11rem' }}>
                KEPALA KELUARGA
              </th>
              <th className="p-3" style={{ minWidth: '6rem' }}>
                ALAMAT
              </th>
              <th className="p-3" style={{ minWidth: '6rem' }}>
                STATUS
              </th>
            </tr>
          </thead>
          {submissions.length > 0 ? (
            <tbody>
              {submissions.map((data) => (
                <tr className="border-b border-gray-400" key={data.id}>
                  <td className="p-2">
                    <button
                      className="px-1 transition duration-500 ease-in-out text-yellow-500 hover:text-yellow-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
                      onClick={() => onUpdateClick(data)}
                    >
                      <i className="material-icons text-3xl">edit</i>
                    </button>
                    <button className="px-1 transition duration-500 ease-in-out text-red-500 hover:text-red-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
                      <i className="material-icons text-3xl">delete</i>
                    </button>
                  </td>
                  <td className="p-2">{data.data.noKK}</td>
                  <td className="p-2">{data.data.jenisPengajuan}</td>
                  <td className="p-2">{data.data.pekerjaan}</td>
                  <td className="p-2">{data.data.pendapatan}</td>
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
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>
    </div>
  );
};

export default SubmissionTable;
