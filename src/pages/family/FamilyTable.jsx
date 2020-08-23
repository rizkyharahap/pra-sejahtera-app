import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classname';
import { getDataFromAPI } from '../../configs/redux/action';

const FamilyTable = () => {
  const dispatch = useDispatch();
  const families = useSelector((state) => state.families);
  useEffect(() => {
    dispatch(getDataFromAPI('families'));
  }, []);

  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-lg py-4">
      <div className="flex items-center justify-between font-bold text-xl mb-3 border-b border-gray-300 leading-relaxed px-4">
        <span>Tabel Keluarga</span>
        <button className="px-1 transition duration-500 ease-in-out text-gray-500 hover:text-gray-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
          <i className="material-icons">print</i>
        </button>
      </div>

      <div className="overflow-x-scroll">
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
          {families.length > 0 ? (
            <tbody>
              {families.map((family) => (
                <tr className="border-b border-gray-400" key={family.id}>
                  <td className="p-2">
                    <button className="px-1 transition duration-500 ease-in-out text-yellow-500 hover:text-yellow-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
                      <i className="material-icons text-3xl">edit</i>
                    </button>
                    <button className="px-1 transition duration-500 ease-in-out text-red-500 hover:text-red-700 transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
                      <i className="material-icons text-3xl">delete</i>
                    </button>
                  </td>
                  <td className="p-2">{family.data.noKK}</td>
                  <td className="p-2">{family.data.nik}</td>
                  <td className="p-2">{family.data.kepalaKeluarga}</td>
                  <td className="p-2">{family.data.alamatLengkap}</td>
                  <td className="p-2">
                    <span
                      className={cx(
                        'inline-block rounded-full px-3 py-1 text-center text-sm font-semibold text-white',
                        family.data.status === 'Mampu'
                          ? 'bg-green-500'
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
    </div>
  );
};

export default FamilyTable;
