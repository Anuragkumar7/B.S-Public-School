import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="B.S Public School" className="flex items-center">
                <img
                  className="w-auto h-8 lg:h-10"
                  src="https://imgs.search.brave.com/12RkbHyrkM6OSJI_Yui3EH-JMwr6xv8NA1jhFh6OseA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1Mvc2Fuc2th/ci1wdWJsaWMtc2No/b29sLW1hbmRyZWxs/YS1sb2dvLTBDMkVF/MDFBMTktc2Vla2xv/Z28uY29tLnBuZw"
                  alt="Logo"
                />
                <h2 className="font-bold pl-3 text-2xl underline">
                  B.S PUBLIC SCHOOL
                </h2>
              </a>
            </div>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <div
              className={`${
                isOpen ? "absolute top-0 right-0 w-60 h-screen bg-white p-5" : "hidden"
              } lg:flex lg:items-center lg:ml-auto lg:space-x-10 lg:relative lg:bg-transparent lg:h-auto lg:p-0 lg:w-auto`}
            >
              {/* Close Button for Mobile Menu */}
              {isOpen && (
                <button
                  onClick={toggleMenu}
                  className="absolute top-5 right-5 text-black focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
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
              )}

              <a
                href="/"
                className="block text-base font-medium text-black transition-all duration-200 hover:bg-gray-200 rounded-md p-2 mt-8 lg:mt-0"
              >
                Home
              </a>
              <a
                href="/About_School"
                className="block text-base font-medium text-black transition-all duration-200 hover:bg-gray-200 rounded-md p-2 mt-2 lg:mt-0"
              >
                About School
              </a>
              <a
                href="/Admission"
                className="block text-base font-medium text-black transition-all duration-200 hover:bg-gray-200 rounded-md p-2 mt-2 lg:mt-0"
              >
                Admissions
              </a>
              <a
                href="/Faculty"
                className="block text-base font-medium text-black transition-all duration-200 hover:bg-gray-200 rounded-md p-2 mt-2 lg:mt-0"
              >
                Faculty
              </a>
              <a
                href="/Achievements"
                className="block text-base font-medium text-black transition-all duration-200 hover:bg-gray-200 rounded-md p-2 mt-2 lg:mt-0"
              >
                Achievements
              </a>
              <a
                href="/contact"
                className="block text-base font-medium text-black transition-all duration-200 hover:bg-gray-200 rounded-md p-2 mt-2 lg:mt-0"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;