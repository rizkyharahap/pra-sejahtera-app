import React from 'react';
import { Link } from 'react-router-dom';
import bannerIlustration from '../../assets/images/happyNeighbour.png';

const Hero = () => (
  <section className="min-h-screen flex flex-wrap-reverse" id="home">
    <div className="w-full flex flex-col -mt-10 sm:justify-center items-center sm:items-start px-6 sm:w-1/2 sm:pt-24 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-40">
      <header className="w-72 sm:w-84">
        <span className="uppercase font-medium text-gray-700">
          Untuk keluarga
        </span>
        <h1 className="text-6xl leading-10 font-semibold text-teal-700 mt-2 sm:text-7xl sm:leading-11">
          Pra-
          <br />
          <span className="text-teal-500 ml-3"> Sejahtera</span>
        </h1>
        <p className="w-full text-right uppercase font-medium text-gray-700 mt-4">
          menjadi lebih
          <b className="text-teal-400 font-semibold"> Sejahtera</b>
        </p>
      </header>

      <article className="mt-4 sm:mt-6">
        <p className="text-center sm:text-left text-gray-600 text-lg">
          Website agar masyarakat membantu keluarga Pra-Sejahtera untuk
          mendapatkan haknya dengan tepat sasaran dengan cara Mengajukan,
          Melaporkan, dan Donasi.
        </p>
      </article>

      <Link
        to="/request/self"
        className="max-w-xs rounded-full px-16 py-4 bg-teal-600 text-xl text-white font-semibold shadow-lg mt-6 mx-auto sm:mx-0 hover:bg-teal-400 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 focus:outline-none"
      >
        Ajukan
      </Link>
    </div>
    <div className="w-full sm:h-screen sm:w-1/2 flex overflow-hidden">
      <img
        src={bannerIlustration}
        alt="Helping Your Neighbour"
        className="ml-auto h-screen-40 max-w-none sm:h-screen"
      />
    </div>
  </section>
);

export default Hero;
