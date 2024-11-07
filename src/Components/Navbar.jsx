import React, { useState } from "react";

const Navbar = () => {
  const whatsappLink = "https://wa.me/917752836655";
  const facebookLink = "https://www.facebook.com/share/2ddwhRJKwYEhTLki/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <header className="bg-[#ffffff] bg-opacity-90 fixed top-0 w-full shadow-md z-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo and Title */}
            <div className="flex items-center pt-2">
              <a href="/" title="Home" className="flex">
                <img
                  className="w-auto h-14"
                  src="../../public/images/logo.png"
                  alt="Logo"
                />
                <h1 className="font-bold pl-5 text-3xl pt-2 font-open-sans">
                  B.S PUBLIC SCHOOL
                </h1>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              type="button"
              className="lg:hidden inline-flex p-2 text-black transition duration-400 rounded-md focus:bg-gray-400 hover:bg-gray-400"
            >
              {isMenuOpen ? (
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
              ) : (
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
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <a
                href="/"
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Home
              </a>
              <a
                href="/About_School"
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                About School
              </a>
              <a
                href="/Activities"
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Activities
              </a>
              <a
                href="/contact"
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Contact us
              </a>
            </div>

            {/* Desktop Social Media Icons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={facebookLink}
                className="flex items-center justify-center text-gray-800 transition duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white hover:bg-orange-600 hover:border-orange-600"
              >
                {/* Facebook Icon */}
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.675 0H1.325C.595 0 0 .593 0 1.326v21.348C0 23.407.595 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.324-.593 1.324-1.326V1.326C24 .593 23.404 0 22.675 0z" />
                </svg>
              </a>
              <a
                href={whatsappLink}
                className="flex items-center justify-center text-gray-800 transition duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white hover:bg-orange-600 hover:border-orange-600"
              >
                {/* WhatsApp Icon */}
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M16 3c7.061 0 13 5.939 13 13 0 2.421-.676 4.772-1.962 6.844l-.283.441 1.116 4.307a1 1 0 0 1-1.283 1.209l-.101-.027-4.288-1.12-.452.273A12.909 12.909 0 0 1 16 29C8.939 29 3 23.061 3 16S8.939 3 16 3zm-.358 3.999c.265 0 .532.004.781.012.293.009.611.071.911.682l.311.658c.076.16.15.356.234.53.272.574.564 1.14.909 1.673.22.352.475.689.799.986.325.297.631.478.969.688.272.165.518.294.776.457.28.18.565.351.856.506.18.098.457.211.764.171.2-.027.427-.138.704-.357.223-.178.463-.235.713-.14l.699.276c.281.11.594.266.733.516.142.256.143.748-.034 1.448-.12.482-.362.954-.647 1.324-.582.747-1.3 1.108-2.153 1.118a4.253 4.253 0 0 1-1.477-.255c-.926-.332-1.756-.872-2.527-1.48a18.34 18.34 0 0 1-2.86-2.943 11.425 11.425 0 0 1-1.667-2.818c-.314-.885-.495-1.756-.353-2.562.108-.624.413-1.09.94-1.45.392-.262.769-.265 1.127-.175l.488.127c.352.1.57.155.723.502l.29.673c.192.448.376.87.629 1.271.24.383.512.743.802 1.093.158.194.321.39.482.582.26.304.522.61.846.853.325.244.527.241.722-.081.08-.136.15-.283.225-.426.27-.536.64-.75 1.093-.75z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white shadow-lg absolute top-16 left-0 w-full">
              <div className="flex flex-col items-center py-4 space-y-4">
                <a
                  href="/"
                  className="text-base text-black transition duration-200 hover:text-opacity-80"
                >
                  Home
                </a>
                <a
                  href="/About_School"
                  className="text-base text-black transition duration-200 hover:text-opacity-80"
                >
                  About School
                </a>
                <a
                  href="/Activities"
                  className="text-base text-black transition duration-200 hover:text-opacity-80"
                >
                  Activities
                </a>
                <a
                  href="/contact"
                  className="text-base text-black transition duration-200 hover:text-opacity-80"
                >
                  Contact us
                </a>

                {/* Mobile Social Media Icons */}
                <div className="flex space-x-3 pt-4">
                  {/* Social media icons (Facebook and WhatsApp) */}
                  <a
                    href={facebookLink}
                    className="flex items-center justify-center text-gray-800 transition duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white hover:bg-orange-600 hover:border-orange-600"
                  >
                    {/* Facebook Icon */}
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.675 0H1.325C.595 0 0 .593 0 1.326v21.348C0 23.407.595 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.324-.593 1.324-1.326V1.326C24 .593 23.404 0 22.675 0z" />
                    </svg>
                  </a>
                  <a
                    href={whatsappLink}
                    className="flex items-center justify-center text-gray-800 transition duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white hover:bg-orange-600 hover:border-orange-600"
                  >
                    {/* WhatsApp Icon */}
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 3c7.061 0 13 5.939 13 13 0 2.421-.676 4.772-1.962 6.844l-.283.441 1.116 4.307a1 1 0 0 1-1.283 1.209l-.101-.027-4.288-1.12-.452.273A12.909 12.909 0 0 1 16 29C8.939 29 3 23.061 3 16S8.939 3 16 3zm-.358 3.999c.265 0 .532.004.781.012.293.009.611.071.911.682l.311.658c.076.16.15.356.234.53.272.574.564 1.14.909 1.673.22.352.475.689.799.986.325.297.631.478.969.688.272.165.518.294.776.457.28.18.565.351.856.506.18.098.457.211.764.171.2-.027.427-.138.704-.357.223-.178.463-.235.713-.14l.699.276c.281.11.594.266.733.516.142.256.143.748-.034 1.448-.12.482-.362.954-.647 1.324-.582.747-1.3 1.108-2.153 1.118a4.253 4.253 0 0 1-1.477-.255c-.926-.332-1.756-.872-2.527-1.48a18.34 18.34 0 0 1-2.86-2.943 11.425 11.425 0 0 1-1.667-2.818c-.314-.885-.495-1.756-.353-2.562.108-.624.413-1.09.94-1.45.392-.262.769-.265 1.127-.175l.488.127c.352.1.57.155.723.502l.29.673c.192.448.376.87.629 1.271.24.383.512.743.802 1.093.158.194.321.39.482.582.26.304.522.61.846.853.325.244.527.241.722-.081.08-.136.15-.283.225-.426.27-.536.64-.75 1.093-.75z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
