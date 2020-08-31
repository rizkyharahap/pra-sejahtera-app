import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import cx from 'classname';
import { addDataFamily } from '../../configs/redux/action';

const FamilyForm = () => {
  const [state] = useState({
    noKK: '',
    nik: '',
    kepalaKeluarga: '',
    alamatLengkap: '',
    status: '',
  });

  const dispatch = useDispatch();
  const buttonLoadings = useSelector(
    (buttonLoading) => buttonLoading.isButtonLoading,
  );

  const { register, handleSubmit, errors } = useForm();

  const onSubmissionSubmit = (data, e) => {
    dispatch(addDataFamily('families', data));
    e.target.reset();
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg relative">
        <div className="flex items-center justify-between font-semibold text-xl py-3 px-4 border-b border-gray-300">
          <span>Keluarga Baru</span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmissionSubmit)}
          className="px-6 md:px-8 pt-6 mb-4"
        >
          <div className="mb-4">
            <label htmlFor="noKK" className="block text-gray-600 mb-1 text-sm">
              {errors.noKK ? (
                <span className="text-red-500 text-sm italic">
                  {errors.noKK.type === 'required'
                    ? 'Nomor Kartu Keluarga tidak boleh kosong'
                    : 'Nomor Kartu Keluarga Maksimal 20 Karakter'}
                </span>
              ) : (
                <span>Nomor Kartu Keluarga</span>
              )}
            </label>
            <input
              id="noKK"
              type="text"
              placeholder="332111XXXXXXXXXX"
              name="noKK"
              defaultValue={state.noKK}
              ref={register({ required: true, maxLength: 20 })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.noKK ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nik" className="block text-gray-600 mb-1 text-sm">
              {errors.nik ? (
                <span className="italic text-red-500">
                  NIK Kepala Keluarga tidak boleh kosong
                </span>
              ) : (
                <span>NIK Kepala Keluarga </span>
              )}
            </label>
            <input
              id="nik"
              type="text"
              placeholder="322110XXXXXXXXXX"
              name="nik"
              defaultValue={state.nik}
              ref={register({ required: true })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.nik ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="kepalaKeluarga"
              className="block text-gray-600 mb-1 text-sm"
            >
              {errors.kepalaKeluarga ? (
                <span className="italic text-red-500">
                  Nama Kepala Keluarga tidak boleh kosong
                </span>
              ) : (
                <span>Nama Kepala Keluarga </span>
              )}
            </label>
            <input
              id="kepalaKeluarga"
              type="text"
              placeholder="Rizki Harahap"
              name="kepalaKeluarga"
              defaultValue={state.kepalaKeluarga}
              ref={register({ required: true })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.kepalaKeluarga ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="alamatLengkap"
              className="block text-gray-600 mb-1 text-sm"
            >
              {errors.alamatLengkap ? (
                <span className="italic text-red-500">
                  Alamat tidak boleh kosong
                </span>
              ) : (
                <span>Alamat</span>
              )}
            </label>
            <input
              id="alamatLengkap"
              type="text"
              placeholder="Jl. Cendrawasih No. 4, RT 03/RW 02, Kelurahan, Kecamatan, Kabupaten, Provinsi"
              name="alamatLengkap"
              defaultValue={state.alamatLengkap}
              ref={register({ required: true })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.alamatLengkap ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-gray-600 mb-1 text-sm"
            >
              Status
            </label>
            <select
              id="status"
              type="select"
              name="status"
              ref={register({ required: true })}
              className="bg-gray-100 border border-gray-400 rounded py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg"
            >
              <option value="Sejahtera">Sejahtera</option>
              <option value="Pra-Sejahtera">Pra-Sejahtera</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={buttonLoadings}
            className={cx(
              'flex items-center bg-teal-600 hover:bg-teal-800 text-xl md:text-lg text-white font-semibold py-3 px-8 rounded-lg focus:outline-none',
              buttonLoadings ? ' opacity-50 cursor-not-allowed' : null,
            )}
          >
            {!buttonLoadings ? (
              <i className="material-icons">save</i>
            ) : (
              <i>
                <svg className="spinner w-5" viewBox="0 0 50 50">
                  <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                  />
                </svg>
              </i>
            )}

            <span className="ml-2 uppercase">Simpan</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default FamilyForm;
