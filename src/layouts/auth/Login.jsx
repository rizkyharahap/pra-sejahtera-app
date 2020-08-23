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
        <div className="flex flex-col items-center justify-center pb-6 ">
          <span className="text-xl font-bold text-gray-800 mb-2">
            Login Admin
          </span>
          <i className="material-icons text-6xl text-teal-500">person_pin</i>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-500 font-semibold mb-1 pr-4"
            htmlFor="inline-full-name"
          >
            E-mail
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            id="email"
            name="email"
            type="text"
            defaultValue=""
            placeholder="happywithhap@gmail.com"
            ref={register({ required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email && 'E-mail Required'}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-500 font-semibold mb-1 pr-4"
            htmlFor="inline-password"
          >
            Password
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            id="password"
            type="password"
            name="password"
            placeholder="**************"
            defaultValue=""
            ref={register({ required: true })}
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
        <span className="text-xs text-gray-700 font-semibold">
          Belum punya akun?
          {' '}
          <a
            href="https://api.whatsapp.com/send?phone=+6282133882546&text=Hallo ! Saya ingin mencoba aplikasi anda."
            className="text-red-500 hover:text-red-700 hover:font-bold"
          >
            register di sini
          </a>
        </span>
      </form>
      <p className="text-center text-gray-600 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
