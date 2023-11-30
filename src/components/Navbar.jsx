import React from 'react'
import logo from '../assets/Logo.png'


const Navbar = () => {
    return (
        <>
            <div className='bg-gray-900'>
                <nav class="">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" class="flex items-center">
                            <img src={logo} class="h-5 mr-3" alt="Flowbite Logo" />

                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span class="sr-only">Product</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul class="font-medium flex justify-center items-center gap-10 flex-col p-4 md:p-0 mt-4 border   md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                                <li>
                                    <a href="#" class="block py-2 pl-3 pr-4 text-white">Product</a>
                                </li>
                                <li>
                                    <a href="#services" class="block py-2 pl-3 pr-4 text-white ">Services</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pl-3 pr-4 text-white">About</a>
                                </li>
                                <button className='bg-white px-10 flex justify-center items-center gap-1 font-bold py-3 rounded-full text-black'>Login</button>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar