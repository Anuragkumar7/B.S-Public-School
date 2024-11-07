import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const About = () => {
  return (
    <>
    <Navbar/>
      <section class="relative py-10 bg-white-900 sm:py-16 lg:py-24">
        <div class="absolute inset-0">
          <img
            class="object-cover w-full h-1/2"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/2/woman-working-laptop.jpg"
            alt=""
          />
        </div>
        <div class="absolute inset-0 bg-gray-900/20"></div>

        <div class="relative w-full px-2 mx-auto sm:px-4 ">
          <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-6 py-6 sm:px-8 sm:py-6">
              <div class="">
                <p>
                  In the year 1995 some philantropes of martial race living in
                  UP and Delhi felt that they should establish an institution on
                  commemorating the secular ideals. Therefore Society for Child
                  Elefare was constituted and registered under the Societies
                  Registration Act at Meerut for attainment of this goal. The
                  school has been consistantly and deliberately striving to
                  achieve peaks of excellence in academics and allround social
                  developement of students through active participation in
                  various activities. Situated at the heart of Garhmukteshwar,
                  we are the upcoming school of value based learning in the
                  area. Catering to the needs of semi urbana dn rural
                  backgrounds of the surrounding areas we are bridging the gaps
                  between the traditional gurukool learning and modern
                  amalgamated learnings. We form the laisen between the
                  learnings at home and wordly application of those learnings
                  through practical understanding.
                </p>

                <p className="text-gray-600 font-bold pt-6">
                  We assess ourselves on the basis of
                </p>
                <ol className="pl-9" style={{ listStyleType: "decimal" }}>
                  <li>Board Result</li>
                  <li>General Discipline</li>
                  <li>Sports Activities</li>
                  <li>Cultural and Social Activities</li>
                  <li>Competitive Examination Successes</li>
                </ol>
                <p className="pt-6">
                  We have achieved outstanding results on all the above
                  criterian and have set high standards for other institutions
                  to follow.
                </p>
              </div>

              <p class="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  title=""
                  class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
        <Footer/>
    </>
  );
};

export default About;
