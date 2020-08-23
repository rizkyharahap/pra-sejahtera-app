import React, { useEffect, useState } from 'react';
import cx from 'classname';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { addRequestSubmission } from '../../configs/redux/action';
import { ReactComponent as Logo } from '../../assets/icons/Ball-Animated.svg';
import Timeline from '../home/Timeline';

function RequestSubmission() {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subDistrict, setSubDistrict] = useState([]);

  const { params } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const buttonLoadings = useSelector(
    (buttonLoading) => buttonLoading.buttonLoading,
  );
  const { register, handleSubmit, errors } = useForm();

  const onSetSubDistrict = (e) => {
    const districtId = e.target.value;
    const urlSubDistrict = fetch(
      `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${districtId}`,
    );

    urlSubDistrict
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((resJson) => {
        setSubDistrict(resJson.kecamatan);
      });
  };

  const onSetDistrict = (e) => {
    const provinceId = e.target.value;
    const urlDistrict = fetch(
      `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceId}`,
    );

    urlDistrict
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((resJson) => {
        setDistrict(resJson.kota_kabupaten);
      });
  };

  const getLocation = () => {
    const urlProvince = fetch(
      'https://dev.farizdotid.com/api/daerahindonesia/provinsi',
    );

    urlProvince
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((resJson) => {
        setProvince(resJson.provinsi);
      });
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    try {
      getLocation();
    } catch (error) {
      alert(error);
    }
  }, []);

  const onRequestSubmit = async (data) => {
    dispatch({ type: 'CHANGE_BUTTON_LOADING', value: true });

    await dispatch(addRequestSubmission(data))
      .catch((err) => alert(err));
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen py-16">
      <Timeline step={params} />
      <form
        className="w-full max-w-5xl mb-4 py-8 px-4 sm:px-16 md:px-24 relative"
        onSubmit={handleSubmit(onRequestSubmit)}
      >
        <div
          className={cx(
            'w-full h-full absolute z-50 flex items-center justify-center bg-white bg-opacity-75 top-0 right-0',
            !buttonLoadings ? 'hidden' : 'block',
          )}
        >
          <div>
            <Logo className="w-20 h-20" />
            <span className="font-semibold text-gray-700">Loading...</span>
          </div>
        </div>
        <div className="text-xl font-bold text-gray-800 mb-10">
          <h3 className="text-2xl">Permintaan Pengajuan</h3>
        </div>
        <div className="mb-6">
          <div className="mb-4">
            <label
              htmlFor="jenisPengajuan"
              className="block text-gray-500 mb-1"
            >
              Jenis Pengajuan
            </label>
            <select
              id="jenisPengajuan"
              type="select"
              name="jenisPengajuan"
              ref={register({ required: true })}
              className="block w-56 bg-gray-200 border border-gray-400 rounded py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-yellow-500"
            >
              <option value="Pengajuan">Pengajuan</option>
              <option value="Pencopotan">Pencotopan</option>
              <option value="Donasi">Donasi</option>
            </select>
            {errors.jenisPengajuan && (
              <p className="text-red-500 text-xs italic">
                {errors.jenisPengajuan && 'Jenis Pengajuan tidak boleh kosong'}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 font-semibold mb-1 pr-4"
              htmlFor="inline-full-name"
            >
              Nomor Kartu Keluarga
            </label>
            <input
              className="bg-gray-200 appearance-none border border-gray-400 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
              id="noKK"
              name="noKK"
              type="text"
              placeholder="exc.301400000000000"
              ref={register({ required: true })}
            />
            {errors.noKK && (
              <p className="text-red-500 text-xs italic">
                {errors.noKK && 'No KK tidak boleh kosong'}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 font-semibold mb-1 pr-4"
              htmlFor="inline-password"
            >
              Nama
            </label>
            <input
              className="bg-gray-200 appearance-none border border-gray-400 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
              id="nama"
              type="text"
              name="nama"
              placeholder="Rizki Harahap"
              ref={register({ required: true })}
            />
            {errors.nama && (
              <p className="text-red-500 text-xs italic">
                {errors.nama && 'Nama tidak boleh kosong'}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 font-semibold mb-1 pr-4"
              htmlFor="inline-password"
            >
              No Telepon / WhatsApp
            </label>
            <input
              className="bg-gray-200 appearance-none border border-gray-400 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
              id="noTelepon"
              type="text"
              name="noTelepon"
              placeholder="082133882544"
              ref={register({ required: true })}
            />
            {errors.noTelepon && (
              <p className="text-red-500 text-xs italic">
                {errors.noTelepon && 'No Telepon tidak boleh kosong'}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="jenisPengajuan"
              className="block text-gray-500 mb-1"
            >
              Alamat
            </label>
            <input
              className=" mb-4 bg-gray-200 appearance-none border border-gray-400 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
              id="alamatLengkap"
              name="alamatLengkap"
              type="text"
              placeholder="Alamat lengkap......."
              ref={register({ required: true })}
            />
            {errors.alamatLengkap && (
              <p className="text-red-500 text-xs italic">
                {errors.alamatLengkap && 'Alamat tidak boleh kosong'}
              </p>
            )}
            <div className="flex flex-wrap">
              <select
                id="province"
                type="select"
                name="province"
                ref={register({ required: true })}
                onChange={onSetDistrict}
                className="block w-56 mr-4 mb-4 bg-gray-200 border border-gray-400 rounded py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-yellow-500"
              >
                {province.length === 0 ? (
                  <option>Provinsi</option>
                ) : (
                  province.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nama}
                    </option>
                  ))
                )}
              </select>
              {errors.province && (
                <p className="text-red-500 text-xs italic">
                  {errors.province && 'Provinsi tidak boleh kosong'}
                </p>
              )}
              <select
                id="district"
                type="select"
                name="district"
                ref={register({ required: true })}
                onChange={onSetSubDistrict}
                className="block w-56  mr-4 mb-4 bg-gray-200 border border-gray-400 rounded py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-yellow-500"
              >
                {district.length === 0 ? (
                  <option>Kota/Kabupaten</option>
                ) : (
                  district.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nama}
                    </option>
                  ))
                )}
              </select>
              {errors.district && (
                <p className="text-red-500 text-xs italic">
                  {errors.district && 'Kota/Kabupaten tidak boleh kosong'}
                </p>
              )}
              <select
                id="subDistrict"
                type="select"
                name="subDistrict"
                ref={register({ required: true })}
                className="block w-56  mr-4 mb-4 bg-gray-200 border border-gray-400 rounded py-2 px-4 text-lg text-gray-700 focus:outline-none focus:bg-white focus:border-yellow-500"
              >
                {subDistrict.length === 0 ? (
                  <option>Kecamatan</option>
                ) : (
                  subDistrict.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nama}
                    </option>
                  ))
                )}
              </select>
              {errors.subDistrict && (
                <p className="text-red-500 text-xs italic">
                  {errors.subDistrict && 'Kecamatan tidak boleh kosong'}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end">
          <button
            className="w-full sm:max-w-sm mb-3 shadow bg-teal-600 hover:bg-teal-800 focus:shadow-outline focus:outline-none text-white font-semibold py-3 rounded-lg"
            type="submit"
          >
            Ajukan
          </button>
          <button
            onClick={() => history.goBack()}
            className="text-yellow-500 hover:text-yellow-700 text-sm font-semibold hover:font-bold"
          >
            Kembali ke menu
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequestSubmission;
