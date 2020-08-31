import React, { useState } from 'react';
import { ReactComponent as WaveTop } from '../../assets/images/wave-top.svg';
import { ReactComponent as WaveBottom } from '../../assets/images/wave-bottom.svg';

const Contact = () => {
  const [message, setMessage] = useState('');

  const onMessageChange = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
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
        <div className="flex flex-row">
          <input
            className="bg-white px-4 h-16 border-2 border-white rounded-lg w-full rounded-tr-none rounded-br-none max-w-lg text-gray-700 leading-tight focus:outline-none focus:shadow-inner"
            id="message"
            type="text"
            name="message"
            placeholder="Ketik pesan disini ....."
            value={message}
            onChange={(e) => onMessageChange(e)}
          />

          <a
            href={`https://api.whatsapp.com/send?phone=+6282133882546&text=${message}`}
            target="blank"
            className="flex items-center justify-center w-1/3 shadow h-16 bg-teal-800 rounded-lg rounded-tl-none rounded-bl-none hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-semibold"
          >
            Contact
          </a>
        </div>
        <span className="text-xs text-gray-200 font-semibold">
          Masukan anda sangat berarti bagi kami.
        </span>
      </div>
      <WaveBottom fill="#234E52" />
    </section>
  );
};

export default Contact;
