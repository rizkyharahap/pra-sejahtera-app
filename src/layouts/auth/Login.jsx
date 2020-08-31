import React, { useEffect } from 'react';
import cx from 'classname';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { loginUsersAPI } from '../../configs/redux/action';
import { ReactComponent as LoadingIcons } from '../../assets/icons/Ball-Animated.svg';
import { ReactComponent as Logo } from '../../assets/PraTelaLogo.svg';

const Login = () => {
  const dispatch = useDispatch();

  const loadings = useSelector((loading) => loading.isLoading);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem('userData'));

  const onLoginSubmit = async (data) => {
    // console.log(data);
    const res = await dispatch(loginUsersAPI(data)).catch((err) => alert(err));

    if (res) {
      // console.log('res', res);
      // console.log('Login Succes');
      history.replace('/admin');
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    if (userData !== null) {
      return history.replace('/admin');
    }
  }, [userData]);
  return (
    <div className="w-full flex items-center justify-center h-screen bg-gray-200 px-3 pt-16 pb-6 ">
      <form
        className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg py-6 px-10 relative"
        onSubmit={handleSubmit(onLoginSubmit)}
      >
        <div
          className={cx(
            'w-full h-full absolute z-50 flex items-center justify-center bg-white bg-opacity-75 top-0 right-0',
            !loadings ? 'hidden' : 'block',
          )}
        >
          <div>
            <LoadingIcons className="w-20 h-20" />
            <span className="font-semibold text-gray-700">Loading...</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Logo className="w-32" />

          <span className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 tracking-tighter">
            Login to
            <span className="text-teal-700"> Pra-</span>
            <span className="text-teal-500">Tera</span>
          </span>
        </div>

        <div className="mb-3">
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
              'bg-gray-200 border border-gray-300 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
              errors.email ? 'border-red-500' : null,
            )}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-600 mb-1 text-sm">
            {errors.email ? (
              <span className="italic text-red-500">
                Password tidak boleh kosong
              </span>
            ) : (
              <span>Password </span>
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
              'bg-gray-200 border border-gray-300 rounded w-full py-2 px-4 text-gray-800 focus:outline-none focus:bg-white focus:border-yellow-500 focus:shadow-lg',
              errors.password ? 'border-red-500' : null,
            )}
          />
        </div>

        <button
          className="w-full shadow bg-teal-500 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white text-lg font-semibold py-3 rounded-lg mb-2"
          type="submit"
        >
          Login
        </button>

        <div className="text-xs text-gray-700 mb-2 text-center font-semibold">
          Belum punya akun?
        </div>

        <Link
          to="/register"
          className="w-full block text-center shadow border border-yellow-500 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-yellow-500 hover:text-white text-lg font-semibold py-3 rounded-lg mb-2"
        >
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
