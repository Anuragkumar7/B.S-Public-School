
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Navbar from './Navbar';

export default function LocationAndContact() {
  return (
    <>
      <Navbar/>
      <section className="relative py-10 bg-gray-100 sm:py-12 lg:py-16 mt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full">
          
          {/* Box containing Our Location, Contact Us, and School Hours */}
          <div className="bg-white p-8 shadow-md rounded-lg"> {/* Added box styling */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Our Location Section */}
              <div>
                <div className="text-left mb-6">
                  <h2 className="text-4xl font-bold text-gray-900">Our Location</h2>
                  <p className="mt-4 text-lg text-gray-600">Visit us at our office or reach out to us through the contact details provided below.</p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <p className="text-gray-700">Durga Colony, Garh Mukteshwar, Uttar Pradesh, 245205</p>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <p className="text-gray-700">+91 9045388623</p>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <p className="text-gray-700">sakshamgaur0010@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="flex justify-end">
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3">
                  <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
                  </div>
                  <form action="#" method="POST" className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                      <div>
                        <label className="text-base font-medium text-gray-900">Parent's Name</label>
                        <div className="mt-1.5">
                          <input
                            type="text"
                            placeholder="Enter parent's name"
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900">Student Name</label>
                        <div className="mt-1.5">
                          <input
                            type="text"
                            placeholder="Enter student name"
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900">Phone Number</label>
                        <div className="mt-1.5">
                          <input
                            type="tel"
                            placeholder="Enter Phone Number"
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900">Class</label>
                        <div className="mt-1.5">
                          <input
                            type="text"
                            placeholder="Class"
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div className="col-span-2">
                        <label className="text-base font-medium text-gray-900">Message</label>
                        <div className="mt-1.5">
                          <textarea
                            placeholder=""
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md resize-none focus:outline-none focus:border-blue-600 caret-blue-600"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* School Hours Section - Below Location and Contact */}
            <div className="mt-6 text-left"> {/* Reduced top margin to mt-6 */}
              <h3 className="text-2xl font-semibold text-gray-800">School Hours</h3>
              <p className="text-gray-700 mt-2">Monday - Saturday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
