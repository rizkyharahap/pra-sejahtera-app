import React from 'react';
import profile from '../../../assets/images/donate.png';
import { ReactComponent as EmailIcons } from '../../../assets/icons/mail.svg';
import { ReactComponent as GithubIcons } from '../../../assets/icons/github-logo.svg';
import { ReactComponent as LinkedIcons } from '../../../assets/icons/linkedin.svg';
import { ReactComponent as InstagramIcons } from '../../../assets/icons/instagram.svg';

const Footer = () => (
  <footer className="relative bg-teal-900 ">
    <div className="flex flex-wrap justify-end py-16 px-6 sm:px-8 lg:px-16">
      <div className="flex-2 w-full max-w-sm">
        <header className="flex flex-row items-center">
          <figure className="w-20 h-20 rounded-full bg-white overflow-hidden">
            <img src={profile} alt="Rizki Harahap" className="h-20" />
          </figure>
          <h4 className="text-xl font-semibold text-white ml-4">
            Rizki Harahap
          </h4>
        </header>
        <article className="mt-6">
          <span className="text-sm text-white">Follow me on :</span>
          <span className="flex mt-3">
            <a href="">
              <i>
                <EmailIcons
                  className="w-8 mr-4 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
                  style={{ fill: '#38B2AC' }}
                />
              </i>
            </a>
            <i>
              <GithubIcons
                className="w-8 mr-4 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
                style={{ fill: '#38B2AC' }}
              />
            </i>
            <i>
              <LinkedIcons
                className="w-8 mr-4 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
                style={{ fill: '#38B2AC' }}
              />
            </i>
            <i>
              <InstagramIcons
                className="w-8 mr-4 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:scale-110 "
                style={{ fill: '#38B2AC' }}
              />
            </i>
          </span>
        </article>
      </div>

      <div className="  flex-2 w-full max-w-sm mt-6">
        <h1 className="text-xl font-semibold text-white">
          Jelajahi Pra-Sejahtera
        </h1>
        <ul className="my-2">
          <li>
            <a
              href="#hero"
              className="text-sm text-white hover:underline hover:text-gray-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#fitur"
              className="text-sm text-white hover:underline hover:text-gray-400"
            >
              Fitur
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              className="text-sm text-white hover:underline hover:text-gray-400"
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm text-white hover:underline hover:text-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className=" flex-2 w-full max-w-sm mt-6">
        <h1 className="ml-auto text-5xl leading-7 font-semibold text-teal-400 sm:text-6xl sm:leading-9">
          Pra-
          <br />
          <span className="text-teal-200 ml-3"> Sejahtera</span>
        </h1>
      </div>
    </div>
    <div className=" text-center px-6 py-3 border-t border-gray-800">
      <span className="text-white ml-3 mt-5 text-xs font-light">
        @2020, Made with Break Heart &#x1F494; in Jawa Tengah by Rizky Harahap
      </span>
    </div>
  </footer>
);

export default Footer;
