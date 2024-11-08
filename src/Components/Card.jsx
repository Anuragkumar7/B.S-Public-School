// Card.js
import React from "react";
import { Link } from 'react-router-dom';


const Card = () => {
  return (
    <>
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-2">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
              Trusted by world-class companies, design teams & popular designers
            </h2>
          </div> */}

        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-2 lg:grid-cols-4 gap-x-6 ">
          <div className="md:px-4 lg:px-4">
            <img
              className="rounded-lg border-solid border-2 border-sky-500 bg-gray-400 h-64"
              src="../../public/images/principal.png"
              alt=""
            />
            <h3 className="mt-4 text-xl font-semibold leading-tight text-black">
              Principal's Message
            </h3>
            <p className="mt-4 text-base text-gray-600">
              As you continue your journey in education, remember that every day is a new opportunity to learn, grow,
              and 
              <Link to="/principal-message" className="text-blue-500 hover:underline"> Read more...</Link>
            </p>
          </div>

          <div className="md:px-4 lg:px-4">
            <img
              className="rounded-lg border-solid border-2 border-sky-500 bg-gray-400 h-64"
              src="../../public/images/sports.jpg"
              alt=""
            />
            <h3 className="mt-4 text-xl font-semibold leading-tight text-black">
              Annual Sports Meet
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="md:px-4 lg:px-4">
            <img
              className="rounded-lg border-solid border-2 border-sky-500 bg-gray-400 h-64"
              src="../../public/images/Achievements.png"
              alt=""
            />
            <h3 className="mt-4 text-xl font-semibold leading-tight text-black">
              Our Achievements
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="md:px-4 lg:px-4">
            <img
              className="rounded-lg border-solid border-2 border-sky-500 bg-gray-400 h-64"
              src="../../public/images/Competition.png"
              alt=""
            />
            <h3 className="mt-4 text-xl font-semibold leading-tight text-black">
              Creative Competition
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>
      </div>
    </section>
              </>
  );
};

export default Card;
