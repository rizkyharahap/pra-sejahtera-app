import React from 'react';
import { Link } from 'react-router-dom';

const Fitur = ({
  title, image, text, link, tag,
}) => (
  <article
    className=" z-10 flex-2 max-w-md m-2 sm:m-4 h-full bg-white rounded-lg shadow-lg text-center p-6  sm:transform sm:hover:-translate-y-1 sm:transition sm:duration-500 sm:ease-in-out sm:hover:scale-110 cursor-pointer"
  >
    <Link to={`/request${link}`}>
      <figure className="w-56 rounded-full shadow-2xl overflow-hidden m-auto">
        <img src={image} alt="Fitur Ilustration" className="h-56" />
      </figure>
      <header className="mt-6">
        <h2 className="font-bold text-2xl text-teal-500">{title}</h2>
        <p className="text-gray-700 text-sm mt-3 h-32">{text}</p>
      </header>
    </Link>
    <div className="mt-6 text-left">
      {tag.map((tags) => (
        <span key={tags} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mt-2">
          #
          {tags}
        </span>
      ))}
    </div>
  </article>
);

export default Fitur;
