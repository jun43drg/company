// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l1.09 3.26L17 6.2l-2.4 2.2.58 3.5L12 10.7l-3.18 1.2.58-3.5L7 6.2l3.91-1.94L12 2z"></path>
            </svg>
            <span className="ml-3 text-xl">Your Company</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <div className="flex mt-4 justify-center md:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a4 4 0 00-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.11 2c-2.51 0-4.51 2.05-4.51 4.57 0 .36.04.72.12 1.07A12.94 12.94 0 013 4.1a4.48 4.48 0 00-.61 2.3c0 1.58.8 2.97 2.01 3.79a4.51 4.51 0 01-2.05-.57v.06c0 2.21 1.56 4.06 3.64 4.48a4.48 4.48 0 01-2.04.08 4.52 4.52 0 004.21 3.12A9.02 9.02 0 012 19.88a12.76 12.76 0 006.92 2.03c8.3 0 12.84-7 12.84-13.05 0-.2 0-.39-.02-.58A9.22 9.22 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16.93 12.08A4.93 4.93 0 0112 17.02a4.93 4.93 0 01-4.93-4.93A4.93 4.93 0 0112 7.17a4.93 4.93 0 014.93 4.93z"
                ></path>
                <path d="M14.06 6.92a1.11 1.11 0 11-1.11-1.11 1.11 1.11 0 011.11 1.11zM22.93 12a10.93 10.93 0 10-10.93 10.93A10.93 10.93 0 0022.93 12z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M21.6 11.25c0 5.76-4.68 10.44-10.44 10.44S.72 17 0 11.25c-.29-.92-.48-1.87-.48-2.84C.72 3.73 6.47 0 12 0s11.28 3.73 11.52 8.41c0 .97-.19 1.92-.48 2.84l-.44.01z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Solutions
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Marketing</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Analytics</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Commerce</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Insights</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Support
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Pricing</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Documentation
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Guides</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">API Status</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Jobs</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Press</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Partners</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Legal
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Claim</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Privacy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Terms</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
