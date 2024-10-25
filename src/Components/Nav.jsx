import React from "react";

const Nav = () => {
  return (
    <header className="fixed top-0 w-full z-50 pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex items-center">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://imgs.search.brave.com/12RkbHyrkM6OSJI_Yui3EH-JMwr6xv8NA1jhFh6OseA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1Mvc2Fuc2th/ci1wdWJsaWMtc2No/b29sLW1hbmRyZWxs/YS1sb2dvLTBDMkVF/MDFBMTktc2Vla2xv/Z28uY29tLnBuZw"
                alt="Logo"
              />
              <h2 className="font-bold pl-3 text-2xl h-8 lg:h-8 underline">
                B.S PUBLIC SCHOOL
              </h2>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              About School
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Admissions
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Faculty
            </a>
            <a
              href="#"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Achievements
            </a>
            <a
              href="/contact"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Contact Us
              {" "}
              Contact Us{" "}
            </a>
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
