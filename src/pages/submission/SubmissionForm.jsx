import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import cx from 'classname';
import {
  actionCheckImage, addNewData,
} from '../../configs/redux/action';
import { ReactComponent as Logo } from '../../assets/icons/Ball-Animated.svg';

const SubmissionForm = (type = 'save') => {
  const [state, setState] = useState({
    noKK: '',
    jenisPengajuan: 'Pengajuan',
    pekerjaan: '',
    pendapatan: '',
    pbb: '',
    fotoRumah: null,
    status: '',
  });

  const dispatch = useDispatch();
  const submissions = useSelector((stateSubmission) => stateSubmission.submissions);
  const loadings = useSelector((loading) => loading.isLoading);

  const { register, handleSubmit, errors } = useForm();

  const onFileChange = async (e) => {
    const file = e.target.files[0];

    await dispatch(actionCheckImage(file)).catch((err) => alert(err));
  };

  const onSubmissionSubmit = async (data) => {
    dispatch(addNewData('submissions', data));
  };

  useEffect(() => {
    if (submissions === null) {
      return console.log(submissions);
    }

    return console.log('submissions');
  }, []);

  return (
    <>
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg py-4 relative">
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
        <div className="flex items-center justify-between font-bold text-xl mb-3 border-b border-gray-300 leading-relaxed px-4">
          <span>Pengajuan Baru</span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmissionSubmit)}
          className="px-6 md:px-8 pt-6 mb-4"
        >
          <div className="mb-4">
            <label htmlFor="noKK" className="block text-gray-500 mb-1">
              * Nomor KK
            </label>
            <input
              id="noKK"
              type="text"
              placeholder="exc.592137128422"
              name="noKK"
              defaultValue={state.noKK}
              ref={register({ required: true, maxLength: 20 })}
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
            <label
              htmlFor="jenisPengajuan"
              className="block text-gray-500 mb-1"
            >
              * Jenis Pengajuan
            </label>
            <select
              id="jenisPengajuan"
              type="select"
              name="jenisPengajuan"
              ref={register({ required: true })}
              defaultValue={state.jenisPengajuan}
              className="block bg-gray-200 border-2 border-gray-300 rounded w-auto py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            >
              <option value="Pengajuan">Pengajuan</option>
              <option value="Pencopotan">Pencotopan</option>
            </select>
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
              defaultValue={state.pekerjaan}
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
              defaultValue={state.pendapatan}
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
              defaultValue={state.pbb}
              ref={register({ required: true })}
              className="bg-gray-200 border-2 border-gray-300 rounded w-full py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {errors.pbb && (
              <p className="text-red-500 text-xs italic">
                {errors.pbb && 'Required'}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="fotoRumah" className="block text-gray-500 mb-1">
              * Foto Rumah
            </label>
            <div className="flex items-center justify-start">
              <label
                htmlFor="fotoRumah"
                className="flex items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg border border-blue-500 cursor-pointer hover:bg-blue-800 hover:text-white"
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
            {errors.fotoRumah && (
              <p className="text-red-500 text-xs italic">
                {errors.fotoRumah && 'Required'}
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
    </>
  );
};

export default SubmissionForm;
