import React from 'react'
import Nav from "./Nav"
import Footer from './Footer'

const About_School = () => {
  return (
    <>
    <Nav/>
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                <span class="relative inline-block">
                    <span class="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                    <span class="relative"> About Us </span>
                </span>
            </h2>
        </div>

        <div class="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
                <img class="w-full mx-auto sm:max-w-xs" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg" alt="" />
            </div>

            <div>
                <h3 class="text-lg font-semibold text-gray-900">Hey! I am John, founder of Celebration.</h3>
                <p class="mt-4 text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p class="mt-4 text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

               </div>
        </div>
    </div>
</section>
<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                    <svg class="text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                <p class="mt-4 text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                    <svg class="text-orange-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
                <p class="mt-4 text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                    <svg class="text-green-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
                <p class="mt-4 text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                    <svg class="text-red-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
                <p class="mt-4 text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
        </div>
    </div>
</section>
<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">People who made it successful</h2>
            <p class="max-w-2xl mx-auto mt-4 text-xl text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
                <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg" alt="" />
            </div>

            <div>
                <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg" alt="" />
            </div>

            <div>
                <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg" alt="" />
            </div>
        </div>

        <div class="mt-8 text-center md:mt-16">
            <a href="#" title="" class="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700" role="button"> Join our team </a>
        </div>
    </div>
</section>


<Footer/>
    </>
  )
}

export default About_School