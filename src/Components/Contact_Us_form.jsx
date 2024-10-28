import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Nav from './Nav';

export default function Contact_Us_form() {
  return (
    <>
      <Nav />
      <section className="relative py-5 bg-gray-100 sm:py-8 lg:py-10 mt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-10 lg:space-y-0 lg:space-x-10">
            
            {/* Left side: About Us Section */}
            <div className="max-w-2xl lg:w-2/3 text-left">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">About Us</h2>
              <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-500">
                Our school is dedicated to fostering an environment that nurtures academic excellence, character development, and a passion for lifelong learning. 
                With a rich history of educational innovation, we take pride in providing quality education and ensuring that each student reaches their fullest potential.
              </p>

              <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-500">
                Our dedicated faculty, state-of-the-art facilities, and diverse co-curricular programs work in harmony to create a holistic learning experience. 
                We believe in the power of education to transform lives and are committed to helping our students become responsible global citizens.
              </p>

              <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-500">
                At our school, we embrace values such as integrity, respect, and compassion, preparing our students not only for academic success but also for personal and social growth.
              </p>
            </div>

            {/* Right side: Contact Us Form */}
            <div className="lg:w-1/3 bg-white p-6 shadow-md rounded-md">
              <form action="#" method="POST">
                <div className="grid grid-cols-1 gap-x-5 gap-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">Enter Parent's Name</label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        placeholder="Enter parent's name"
                        className="block w-full px-4 py-3 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">Enter Student Name</label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        placeholder="Enter student name"
                        className="block w-full px-4 py-3 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">Phone Number</label>
                    <div className="mt-2.5 relative">
                      <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        className="block w-full px-4 py-3 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">Enter Student Age</label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        placeholder="Enter student age"
                        className="block w-full px-4 py-3 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">Message</label>
                    <div className="mt-2.5 relative">
                      <textarea
                        placeholder=""
                        className="block w-full px-4 py-3 text-black bg-white border border-gray-200 rounded-md resize-none focus:outline-none focus:border-blue-600 caret-blue-600"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
