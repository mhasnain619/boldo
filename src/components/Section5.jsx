import React from 'react'
import atoo from '../assets/atooo.png'
import frameimg from '../assets/Frame.png'
import { FaCircleCheck } from "react-icons/fa6";


const Section5 = () => {
    return (
        <>

            <div className=''>
                <div className='grid md:grid-cols-2'>
                    <div className="p-10 md:h-[100vh]">
                        <img src={atoo} alt="atooo" />
                        <div className='hidden md:block relative md:bottom-60 rounded-lg md:left-52  md:w-56 bg-white'>
                            <img src={frameimg} className='' alt="fframees" />
                        </div>

                    </div>
                    <div className=' flex items-center'>
                        <div className=''>
                            <h1 className='text-2xl px-8 md:text-3xl md:px-36 md:leading-[55px] mb-10'>
                                We connect our customers with the best and help them keep up-and stay open
                            </h1>
                            <div className='flex gap-3 ml-8 mb-5 md:ml-36 md:items-center'>
                                <FaCircleCheck className='h-7 w-7' />
                                <p>We connect our customer with the best.</p>
                            </div>
                            <div className='flex gap-3 ml-8 mb-5 md:ml-36 md:items-center'>
                                <FaCircleCheck className='h-7 w-7' />
                                <p>We connect our customer with the best.</p>
                            </div>
                            <div className='flex gap-3 ml-8 md:ml-36 md:items-center mb-7'>
                                <FaCircleCheck className='h-7 w-7' />
                                <p>We connect our customer with the best.</p>
                            </div>
                            <button className='px-16 py-4 ml-24 md:ml-36 rounded-full bg-gray-900 text-white hover:bg-white hover:text-black hover:ring-1 transition'>Start now</button>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Section5
