import React, { useEffect } from 'react';
import cx from 'classname';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/icons/Ball-Animated.svg';
import { getDataFromAPI } from '../../configs/redux/action';
import './Request.scss';

const Request = () => {
  const dispatch = useDispatch();
  const requestMessages = useSelector((state) => state.requestMessage);
  const loadings = useSelector((loading) => loading.isLoading);

  useEffect(() => {
    const getData = async () => {
      await dispatch(getDataFromAPI('request_message')).catch((err) => alert(err));
    };

    getData();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between font-semibold text-xl py-3 px-4 border-b border-gray-300">
        <span>Permintaan</span>
      </div>

      <div className="overflow-auto relative h-64">
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
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '3rem' }}
              >
                Status
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '6rem' }}
              >
                Jenis
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '10rem' }}
              >
                Nama Pengaju
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '10rem' }}
              >
                No. KK
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '10rem' }}
              >
                No. Telepon
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '16rem' }}
              >
                Alamat Lengkap
              </th>
            </tr>
          </thead>

          {requestMessages.length > 0 ? (
            <tbody className="overflow-y-auto w-full">
              {requestMessages.map((requestMessage) => (
                <tr
                  className="border-b border-gray-300"
                  key={requestMessage.id}
                >
                  <td className="">
                    <button
                      type="button"
                      className="px-1 transition duration-500 ease-in-out text-yellow-500 hover:text-yellow-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
                    >
                      <i className="material-icons text-3xl">
                        {requestMessage.data.status === 'Proses'
                          ? 'pending_actions'
                          : 'check_circle_outline'}
                      </i>
                      {/* <span
                        className={cx(
                          'inline-block rounded-full px-3 py-1 text-center text-sm font-semibold text-white',
                          requestMessage.data.status === 'Proses'
                            ? 'bg-yellow-500'
                            : 'bg-green-500',
                        )}
                      >
                        {requestMessage.data.status}
                      </span> */}
                    </button>
                  </td>
                  <td className="p-2">
                    <span
                      className={cx(
                        'px-2 py-1 rounded-full text-white text-xs',
                        requestMessage.data.jenisPengajuan === 'Pengajuan'
                          ? 'bg-teal-500'
                          : requestMessage.data.jenisPengajuan === 'Pencopotan'
                            ? 'bg-red-500 '
                            : 'bg-yellow-500',
                      )}
                    >
                      {requestMessage.data.jenisPengajuan}
                    </span>
                  </td>
                  <td className="p-2 text-left">{requestMessage.data.nama}</td>
                  <td className="p-2">{requestMessage.data.noKK}</td>
                  <td className="p-2">{requestMessage.data.noTelepon}</td>
                  <td className="p-2 text-left">
                    {requestMessage.data.alamatLengkap}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>

      <div className="py-1 px-4 text-xs">
        <span className="legend-pengajuan mr-2">Pengajuan</span>
        <span className="legend-pencopotan mr-2">Pencopotan</span>
        <span className="legend-donasi mr-2">Donasi</span>
      </div>
    </div>
  );
};

export default Request;
