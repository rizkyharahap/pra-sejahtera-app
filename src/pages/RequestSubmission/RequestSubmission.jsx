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
    (buttonLoading) => buttonLoading.isButtonLoading,
  );
  const { register, handleSubmit, errors } = useForm();

  // const onSetSubDistrict = (e) => {
  //   const districtId = e.target.value;
  //   const urlSubDistrict = fetch(
  //     `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${districtId}`,
  //   );

  //   urlSubDistrict
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json();
  //       }
  //     })
  //     .then((resJson) => {
  //       setSubDistrict(resJson.kecamatan);
  //     });
  // };

  // const onSetDistrict = (e) => {
  //   const provinceId = e.target.value;
  //   const urlDistrict = fetch(
  //     `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceId}`,
  //   );

  //   urlDistrict
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json();
  //       }
  //     })
  //     .then((resJson) => {
  //       setDistrict(resJson.kota_kabupaten);
  //     });
  // };

  // const getLocation = () => {
  //   const urlProvince = fetch(
  //     'https://dev.farizdotid.com/api/daerahindonesia/provinsi',
  //   );

  //   urlProvince
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json();
  //       }
  //     })
  //     .then((resJson) => {
  //       setProvince(resJson.provinsi);
  //     });
  // };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    try {
      // getLocation();
    } catch (error) {
      alert(error);
    }
  }, []);

  const onRequestSubmit = (data, e) => {
    dispatch(addRequestSubmission('request_message', data));
    e.target.reset();
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen py-16">
      <Timeline step={params} />
      <form
        className="w-full max-w-5xl mb-4 py-8 px-4 sm:px-16 md:px-24 relative"
        onSubmit={handleSubmit(onRequestSubmit)}
      >
        <div className="text-xl font-bold text-gray-800 mb-10">
          <h3 className="text-2xl">Permintaan Pengajuan</h3>
        </div>
        <div className="mb-6">
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
              className={cx(
                'bg-gray-100 border border-gray-400 rounded py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.jenisPengajuan ? 'border-red-500' : null,
              )}
            >
              <option value="Pengajuan">Pengajuan</option>
              <option value="Pencopotan">Pencotopan</option>
              <option value="Donasi">Donasi</option>
            </select>
          </div>

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
              name="noKK"
              type="text"
              placeholder="exc.301400000000000"
              ref={register({ required: true })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.noKK ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nama" className="block text-gray-600 mb-1 text-sm">
              {errors.nama ? (
                <span className="text-red-500 text-sm italic">
                  Nama tidak boleh kosong
                </span>
              ) : (
                <span>Nama</span>
              )}
            </label>

            <input
              id="nama"
              type="text"
              name="nama"
              placeholder="Rizki Harahap"
              ref={register({ required: true })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.nama ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="noTelepon"
              className="block text-gray-600 mb-1 text-sm"
            >
              {errors.noTelepon ? (
                <span className="text-red-500 text-sm italic">
                  Nomor Telepon tidak boleh kosong
                </span>
              ) : (
                <span>Nomor Telepon</span>
              )}
            </label>

            <input
              id="noTelepon"
              type="text"
              name="noTelepon"
              placeholder="082133882544"
              ref={register({ required: true })}
              className={cx(
                'bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.noTelepon ? 'border-red-500' : null,
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="alamatLengkap"
              className="block text-gray-600 mb-1 text-sm"
            >
              {errors.alamatLengkap ? (
                <span className="text-red-500 text-sm italic">
                  Alamat Lengkap tidak boleh kosong
                </span>
              ) : (
                <span>Alamat Lengkap</span>
              )}
            </label>

            <input
              id="alamatLengkap"
              name="alamatLengkap"
              type="text"
              placeholder="Alamat lengkap......."
              ref={register({ required: true })}
              className={cx(
                'mb-3 bg-gray-100 border border-gray-400 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                errors.alamatLengkap ? 'border-red-500' : null,
              )}
            />

            {/* <div className="flex flex-wrap">
              <select
                id="province"
                type="select"
                name="province"
                ref={register({ required: true })}
                onChange={onSetDistrict}
                placeholder="Provinsi"
                className={cx(
                  'flex-1 mr-4 mb-4 bg-gray-100 border border-gray-400 rounded py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                  errors.province ? 'border-red-500' : null,
                )}
              >
                <option value="" disabled selected>
                  Provinsi
                </option>
                {province.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.nama}
                  </option>
                ))}
              </select>

              <select
                id="district"
                type="select"
                name="district"
                ref={register({ required: true })}
                onChange={onSetSubDistrict}
                value={null}
                className={cx(
                  'flex-1 mr-4 mb-4 bg-gray-100 border border-gray-400 rounded py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                  errors.district ? 'border-red-500' : null,
                )}
              >
                <option value="" disabled selected>
                  Kota/Kabupaten
                </option>
                {district.map((item) => (
                  <option key={item.id} value={item.nama}>
                    {item.nama}
                  </option>
                ))}
              </select>

              <select
                id="subDistrict"
                type="select"
                name="subDistrict"
                ref={register({ required: true })}
                className={cx(
                  'flex-1 mr-4 mb-4 bg-gray-100 border border-gray-400 rounded py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
                  errors.subDistrict ? 'border-red-500' : null,
                )}
              >
                <option value="" disabled selected>
                  Kecamatan
                </option>
                {subDistrict.map((item) => (
                  <option key={item.id} value={item.nama}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end">
          <button
            type="submit"
            disabled={buttonLoadings}
            className={cx(
              'w-full flex items-center justify-center  sm:max-w-sm mb-3 shadow bg-teal-600 hover:bg-teal-800 text-white font-semibold py-4 rounded-lg focus:shadow-outline focus:outline-none',
              buttonLoadings ? ' opacity-50 cursor-not-allowed' : null,
            )}
          >
            {!buttonLoadings ? null : (
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
            <span className="ml-2 uppercase">Ajukan</span>
          </button>

          <button
            type="button"
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
