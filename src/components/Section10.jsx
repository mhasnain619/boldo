import React from 'react'
import man1 from '../assets/man1.png'
import man2 from '../assets/man2.png'
import man3 from '../assets/man3.png'

const Section10 = () => {
    return (
        <>

            <div className='grid md:grid-cols-3 place-items-center'>
                <div className='mb-5'>
                    <div class="max-w-sm rounded-lg">
                        <a href="#">
                            <img class="w-full" src={man1} alt="man1" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Cool feature title</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-600 dark:text-gray-400">Learning curve network effects retrun on investment</p>
                            <a href="#" class="inline-flex items-center py-2 text-lg font-medium text-center text-black">
                                Explore Page
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-5'>


                    <div class="max-w-sm rounded-lg">
                        <a href="#">
                            <img class="w-full" src={man3} alt="man3" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Even cooler feature</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-600 dark:text-gray-400">Learning curve network effects retrun on investment</p>
                            <a href="#" class="inline-flex items-center py-2 text-lg font-medium text-center text-black">
                                Explore Page
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-5'>
                    <div class="max-w-sm rounded-lg">
                        <a href="#">
                            <img class="w-full" src={man2} alt="man2" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Cool feature title</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-600 dark:text-gray-400">Learning curve network effects retrun on investment</p>
                            <a href="#" class="inline-flex items-center  py-2 text-lg font-medium text-center text-black">
                                Explore Page
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5 mb-5 items-center'>
                <button className='px-12 py-3 rounded-full ring-1 border hover:bg-slate-900 hover:text-white transition'>Learn more</button>
            </div>
        </>
    )
}

export default Section10
