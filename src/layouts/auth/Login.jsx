import React, { useEffect } from 'react';
import cx from 'classname';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUsersAPI } from '../../configs/redux/action';
import { ReactComponent as Logo } from '../../assets/icons/Ball-Animated.svg';

const Login = () => {
  const dispatch = useDispatch();

  const loadings = useSelector((loading) => loading.isLoading);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem('userData'));

  const onLoginSubmit = async (data) => {
    console.log(data);
    const res = await dispatch(loginUsersAPI(data)).catch((err) => alert(err));

    if (res) {
      console.log('res', res);
      console.log('Login Succes');
      history.replace('/admin');
    }
  };

  useEffect(() => {
    if (userData !== null) {
      return history.replace('/admin');
    }
  }, [userData]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-200 px-3">
      <form
        className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg mb-4 py-8 px-10 relative"
        onSubmit={handleSubmit(onLoginSubmit)}
      >
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

        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-gray-800 mb-4">
            Login Admin
          </span>

          <i className="material-icons text-7xl text-teal-500 mb-4">
            person_pin
          </i>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-600 mb-1 text-sm">
            {errors.email ? (
              <span className="italic text-red-500">
                E-mail tidak boleh kosong
              </span>
            ) : (
              <span>E-mail </span>
            )}
          </label>

          <input
            id="email"
            name="email"
            type="text"
            defaultValue=""
            placeholder="happywithhap@gmail.com"
            ref={register({ required: true })}
            className={cx(
              'bg-gray-300 border border-gray-300 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
              errors.pendapatan ? 'border-red-500' : null,
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email && 'E-mail Required'}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-600 mb-1 text-sm">
            {errors.email ? (
              <span className="italic text-red-500">
                E-mail tidak boleh kosong
              </span>
            ) : (
              <span>E-mail </span>
            )}
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="**************"
            defaultValue=""
            ref={register({ required: true })}
            className={cx(
              'bg-gray-300 border border-gray-300 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
              errors.pendapatan ? 'border-red-500' : null,
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password && 'Password Required'}
            </p>
          )}
        </div>
        <div className="md:flex md:items-center">
          <button
            className="w-full shadow bg-teal-600 hover:bg-teal-800 focus:shadow-outline focus:outline-none text-white font-semibold py-3 rounded-lg mb-2"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <span className="text-xs text-gray-700">
          Belum punya akun?
          {' '}
          <a
            href="https://api.whatsapp.com/send?phone=+6282133882546&text=Hallo ! Saya ingin mencoba aplikasi anda."
            className="text-red-500 hover:text-red-700 hover:font-semibold"
          >
            register di sini
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
