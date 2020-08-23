import React from 'react';
import cx from 'classname';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewData } from '../../configs/redux/action';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmissionSubmit = async (data) => {
    dispatch(addNewData('submissions', data));
  };

  const loadings = useSelector((loading) => loading.isLoading);
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="h-full flex items-center justify-center ">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 bg-white rounded-lg overflow-hidden shadow-lg py-4 relative">
        <div
          className={cx(
            'w-full h-full absolute z-50 flex items-center justify-center bg-blue-900',
            !loadings ? 'hidden' : 'block',
          )}
        >
          ...loading
        </div>
        <div className="flex items-center justify-between font-bold text-xl mb-3 border-b border-gray-300 leading-relaxed px-4">
          <span>Pengajuan Baru</span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmissionSubmit)}
          className="px-6 md:px-8 pt-6 mb-4"
        >
          <div className="mb-4">
            <label htmlFor="noKK" className="block text-gray-500 mb-1">
              E-mail
            </label>
            <input
              id="noKK"
              type="text"
              placeholder="exc.happywithhap@gmail.com"
              name="noKK"
              defaultValue=""
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              className="bg-gray-200 border-2 border-gray-300 rounded w-full py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {errors.noKK && (
              <p className="text-red-500 text-xs italic">
                {errors.noKK.type === 'required'
                  ? 'Required'
                  : 'Maksimal 20 Karakter'}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="pekerjaan" className="block text-gray-500 mb-1">
              * Pekerjaan
            </label>
            <input
              id="pekerjaan"
              type="text"
              placeholder="exc.( Petani, Guru, Karyawan )"
              name="pekerjaan"
              defaultValue=""
              ref={register({ required: true })}
              className="bg-gray-200 border-2 border-gray-300 rounded w-full py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {errors.pekerjaan && (
              <p className="text-red-500 text-xs italic">
                {errors.pekerjaan && 'Required'}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="pendapatan" className="block text-gray-500 mb-1">
              * Pendapatan Pertahun
            </label>
            <input
              id="pendapatan"
              type="number"
              placeholder="exc.( 4.000.000 )"
              name="pendapatan"
              defaultValue=""
              ref={register({ required: true })}
              className="bg-gray-200 border-2 border-gray-300 rounded w-full py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {errors.pendapatan && (
              <p className="text-red-500 text-xs italic">
                {errors.pendapatan && 'Required'}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="pbb" className="block text-gray-500 mb-1">
              * Pajak Bumi dan Bangunan
            </label>
            <input
              id="pbb"
              type="number"
              placeholder="exc.( 4.000.000 )"
              name="pbb"
              defaultValue=""
              ref={register({ required: true })}
              className="bg-gray-200 border-2 border-gray-300 rounded w-full py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {errors.pbb && (
              <p className="text-red-500 text-xs italic">
                {errors.pbb && 'Required'}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center bg-blue-500 hover:bg-blue-700 text-xl md:text-lg text-white font-semibold py-2 px-4 rounded-full focus:outline-none"
          >
            <i className="material-icons">save</i>
            <span className="ml-2 uppercase">Simpan</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
