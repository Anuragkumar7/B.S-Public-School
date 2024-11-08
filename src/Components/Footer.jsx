import React from "react";

const Footer = () => {
  const Instagram = "https://www.instagram.com/bs_public_school_1/";
  const whatsappLink = "https://wa.me/917752836655";
  const facebookLink = "https://www.facebook.com/share/2ddwhRJKwYEhTLki/";

  return (
    <>
      <section class="py-12 bg-gradient-to-r bg-white">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
          <div class="text-center xl:flex xl:items-center xl:justify-between xl:text-left ">
            <div class="xl:flex xl:items-center xl:justify-start">
              <img
                class="w-auto mx-auto h-7"
                src="../../public/images/logo.png"
                alt="logo"
              />

              <p class="mt-5 text-sm text-black xl:ml-6 xl:mt-0">
                © Copyright 2024{" "}
              </p>
            </div>

            <div class="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
              <ul class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                <li>
                  <a
                    href="/About_School"
                    title=""
                    class="text-sm text-black transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                {/* <li>
                  <a
                    href="#"
                    title=""
                    class="text-sm text-black transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li> */}

                <li>
                  <a
                    href="./public/Files/privacy-policy.pdf"
                    title="Privacy Policy"
                    target="_blank"
                    class="text-sm text-black transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="./public/Files/TERM-AND-CONDITION.pdf"
                    title="TERM-AND-CONDITION"
                    target="_blank"
                    class="text-sm text-black transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    title=""
                    class="text-sm text-black transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Support{" "}
                  </a>
                </li>
              </ul>

              <div class="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

              <ul class="flex items-center justify-center space-x-8 xl:justify-end">
                <li>
                  <a
                    href={facebookLink}
                    title=""
                    class="block text-black transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href={Instagram}
                    title=""
                    class="block text-black transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
