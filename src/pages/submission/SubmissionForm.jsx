import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import cx from 'classname';
import { actionCheckImage, addNewData } from '../../configs/redux/action';

const SubmissionForm = () => {
  const [state] = useState({
    noKK: '',
    jenisPengajuan: 'Pengajuan',
    pekerjaan: '',
    pendapatan: '',
    pbb: '',
    fotoRumah: null,
    status: '',
  });

  const dispatch = useDispatch();
  const buttonLoadings = useSelector(
    (buttonLoading) => buttonLoading.isButtonLoading,
  );

  const { register, handleSubmit, errors } = useForm();

  const onFileChange = async (e) => {
    const file = e.target.files[0];

    await dispatch(actionCheckImage(file)).catch((err) => alert(err));
  };

  const onSubmissionSubmit = (data, e) => {
    dispatch(addNewData('submissions', data));
    e.target.reset();
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg relative">
        <div className="flex items-center justify-between font-semibold text-xl py-3 px-4 border-b border-gray-300">
          <span>Pengajuan Baru</span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmissionSubmit)}
          className="px-6 md:px-8 lg:px-20 xl:px-6 pt-6 mb-4"
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
              placeholder="exc.592137128422"
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
            <label
              htmlFor="jenisPengajuan"
              className="block text-gray-600 mb-1 text-sm"
            >
              Jenis Pengajuan
            </label>
            <select
              id="jenisPengajuan"
              type="select"
              name="jenisPengajuan"
              ref={register({ required: true })}
              defaultValue={state.jenisPengajuan}
              className="bg-gray-100 border border-gray-400 rounded py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg"
            >
              <option value="Pengajuan">Pengajuan</option>
              <option value="Pencopotan">Pencotopan</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="pekerjaan"
              className="block text-gray-600 mb-1 text-sm"
            >
              {errors.pekerjaan ? (
                <span className="italic text-red-500">
                  Pekerjaan tidak boleh kosong
                </span>
              ) : (
                <span>Pekerjaan</span>
              )}
            </label>
            <input
              id="pekerjaan"
              type="text"
              placeholder="exc.( Petani, Guru, Karyawan )"
              name="pekerjaan"
              defaultValue={state.pekerjaan}
              ref={register({ required: true })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.pekerjaan ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="pendapatan"
              className="block text-gray-600 mb-1 text-sm"
            >
              {errors.pendapatan ? (
                <span className="italic text-red-500">
                  Pendapatan tidak boleh kosong
                </span>
              ) : (
                <span>Pendapatan</span>
              )}
            </label>
            <input
              id="pendapatan"
              type="number"
              placeholder="exc.( 4.000.000 )"
              name="pendapatan"
              defaultValue={state.pendapatan}
              ref={register({ required: true })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.pendapatan ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pbb" className="block text-gray-600 mb-1 text-sm">
              {errors.pbb ? (
                <span className="italic text-red-500">
                  Pajak Bumi dan Bangunan tidak boleh kosong
                </span>
              ) : (
                <span>Pajak Bumi dan Bangunan </span>
              )}
            </label>
            <input
              id="pbb"
              type="number"
              placeholder="exc.( 4.000.000 )"
              name="pbb"
              defaultValue={state.pbb}
              ref={register({ required: true })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.pbb ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="fotoRumah"
              className="block text-gray-600 mb-1 text-sm"
            >
              {errors.fotoRumah ? (
                <span className="italic text-red-500">
                  Foto Rumah tidak boleh kosong
                </span>
              ) : (
                <span>Foto Rumah </span>
              )}
            </label>
            <div className="flex items-center justify-start">
              <label
                htmlFor="fotoRumah"
                className="flex items-center px-2 py-1 bg-white text-yellow-500 rounded-lg shadow-lg border border-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-white"
              >
                <i className="material-icons">photo_camera</i>
                <span className="ml-1 uppercase">upload</span>
                <input
                  id="fotoRumah"
                  name="fotoRumah"
                  type="file"
                  accept="image/*"
                  capture="camera"
                  className="hidden focus:outline-none"
                  defaultValue={state.fotoRumah}
                  ref={register({ required: true })}
                  onChange={onFileChange}
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className={cx(
              ' flex items-center bg-teal-600 hover:bg-teal-800 text-xl md:text-lg text-white font-semibold py-3 px-8 rounded-lg focus:outline-none',
              buttonLoadings ? ' opacity-50 cursor-not-allowed' : null,
            )}
            disabled={buttonLoadings}
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

export default SubmissionForm;
