import React from 'react'
import women from '../assets/women.png'
import frameImage from '../assets/Frame.png';
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GiJusticeStar } from "react-icons/gi";




const Section6 = () => {
    return (
        <>

            <div className=''>
                <div className='grid md:grid-cols-2'>
                    <div className=' flex items-center'>
                        <div className=''>
                            <h1 className='text-2xl px-8 md:text-3xl md:px-36 md:leading-[55px] mb-10'>
                                We connect our customers with the best and help them keep up-and stay open
                            </h1>
                            <div className='border pl-5 h-16 w-80 md:w-96 flex gap-3 md:ml-36 mx-4 mb-5  items-center hover:bg-gray-900 hover:text-white'>
                                <FaCircleCheck className='h-7 w-7' />
                                <p>We connect our customer with the best.</p>
                            </div>
                            <div className='border pl-5 h-16 w-80  md:w-96 flex gap-3 md:ml-36 mx-4 mb-5 items-center hover:bg-gray-900 hover:text-white'>
                                <MdOutlineRemoveRedEye className='h-7 w-7' />
                                <p>We connect our customer with the best.</p>
                            </div>
                            <div className='border pl-5 w-80  md:w-96  h-16 flex gap-3 md:ml-36 mx-4 items-center mb-10 hover:bg-gray-900 hover:text-white'>
                                <GiJusticeStar className='h-7 w-7' />
                                <p>We connect our customer with the best.</p>
                            </div>
                            <button className='px-16 py-4 ml-24 md:ml-36 rounded-full bg-gray-900 text-white hover:bg-white hover:text-black hover:ring-1 transition'>Start now</button>
                        </div>
                    </div>
                    <div className="p-10 md:h-[100vh]">
                        <img src={women} alt="women" />
                        <div className='hidden md:block relative md:bottom-60 rounded-lg md:left-52 md:w-56 bg-white'>
                            <img src={frameImage} className='' alt="frame2" />
                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}

export default Section6
