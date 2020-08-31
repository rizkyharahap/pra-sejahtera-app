import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classname';
import { getDataFromAPI } from '../../configs/redux/action';
import { ReactComponent as Logo } from '../../assets/icons/Ball-Animated.svg';

const FamilyTable = () => {
  const dispatch = useDispatch();
  const families = useSelector((state) => state.families);
  const loadings = useSelector((loading) => loading.isLoading);

  useEffect(() => {
    const getData = async () => {
      await dispatch(getDataFromAPI('families')).catch((err) => alert(err));
    };

    getData();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between font-semibold text-xl py-3 px-4 border-b border-gray-300">
        <span>Data Keluarga</span>
        <button
          type="button"
          className="h-6 transition duration-500 ease-in-out text-gray-500 hover:text-gray-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
        >
          <i className="material-icons">print</i>
        </button>
      </div>

      <div className="overflow-auto relative" style={{ height: '65vh' }}>
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
                style={{ minWidth: '6rem' }}
              >
                Actions
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
                NIK
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '6rem' }}
              >
                Kepala Keluarga
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '16rem' }}
              >
                Alamat
              </th>
              <th
                className="py-3 px-2 font-semibold"
                style={{ minWidth: '8rem' }}
              >
                Status
              </th>
            </tr>
          </thead>

          {families.length > 0 ? (
            <tbody>
              {families.map((family) => (
                <tr className="border-b border-gray-300" key={family.id}>
                  <td className="p-2">
                    <button
                      type="button"
                      className="px-1 transition duration-500 ease-in-out text-yellow-500 hover:text-yellow-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
                    >
                      <i className="material-icons text-3xl">edit</i>
                    </button>
                    <button
                      type="button"
                      className="px-1 transition duration-500 ease-in-out text-red-500 hover:text-red-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
                    >
                      <i className="material-icons text-3xl">delete</i>
                    </button>
                  </td>
                  <td className="p-2">{family.data.noKK}</td>
                  <td className="p-2">{family.data.nik}</td>
                  <td className="p-2 text-left">
                    {family.data.kepalaKeluarga}
                  </td>
                  <td className="p-2 text-left">{family.data.alamatLengkap}</td>
                  <td className="p-2">
                    <span
                      className={cx(
                        'inline-block rounded-full px-3 py-1 text-center text-xs font-semibold text-white',
                        family.data.status === 'Sejahtera'
                          ? 'bg-teal-500'
                          : 'bg-red-500',
                      )}
                    >
                      {family.data.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>

      <div className="py-1 px-4 text-xs">
        <span className="legend-pengajuan mr-2">Sejahtera</span>
        <span className="legend-pencopotan mr-2">Pra-Sejahtera</span>
      </div>
    </div>
  );
};

export default FamilyTable;
