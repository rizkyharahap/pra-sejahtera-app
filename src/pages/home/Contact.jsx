import React from 'react';
import cx from 'classname';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { ReactComponent as WaveTop } from '../../assets/images/wave-top.svg';
import { ReactComponent as WaveBottom } from '../../assets/images/wave-bottom.svg';

const Contact = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const loadings = useSelector((loading) => loading.isLoading);
  const { register, handleSubmit, errors } = useForm();

  const onSubmitMessage = async (data) => {
    console.log(data);
  };

  return (
    <section className="bg-teal-500 relative -mt-1" id="contact">
      <WaveTop />
      <div className="mx-auto max-w-xl px-4 py-4 md:py-0">
        <header className="text-center mb-8">
          <h6 className="text-2xl text-white font-semibold">
            Punya pertanyaan? Hubungi kami.
          </h6>
        </header>
        <form
          className="flex flex-row"
          onSubmit={handleSubmit(onSubmitMessage)}
        >
          <input
            className="bg-white px-4 h-16 border-2 border-white rounded-lg w-full rounded-tr-none rounded-br-none max-w-lg text-gray-700 leading-tight focus:outline-none focus:shadow-inner"
            id="message"
            type="text"
            name="message"
            placeholder="Ketik pesan disini ....."
            defaultValue=""
            ref={register({ required: true })}
          />

          <button
            className="w-1/3 shadow h-16 bg-teal-800 rounded-lg rounded-tl-none rounded-bl-none hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-semibold py-3"
            type="submit"
          >
            Contact
          </button>
        </form>
        {errors.message && (
          <p className="text-gray-200 text-xs italic">
            {errors.message && 'Message Required'}
          </p>
        )}
        <span className="text-xs text-gray-200 font-semibold">
          Masukan anda sangat berarti bagi kami.
        </span>
      </div>
      <WaveBottom fill="#234E52" />
    </section>
  );
};

export default Contact;
