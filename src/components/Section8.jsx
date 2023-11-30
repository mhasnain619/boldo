import React from 'react'
import image2 from '../assets/image2.png'
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Section8 = () => {
    return (
        <>
            <div className='md:h-[100vh]'>
                <div className='flex mt-20 justify-center items-center'>
                    <img src={image2} alt="img2" />
                </div>
                <div className='md:grid md:grid-cols-2'>
                    <div className='mt-8'>
                        <h1 className='text-2xl px-8 md:text-3xl md:px-36 leading-[55px] mb-10'>
                            We connect our customers with the best and help them keep up-and stay open
                        </h1>
                    </div>
                    <div className='md:mt-8'>
                        <div className='px-8 flex gap-3 mb-8 items-center md:w-[485px]'>
                            <p className='text-lg md:text-2xl'>We connect our customer with the best.</p>
                            <IoIosArrowDropdownCircle className='h-7 w-7' />
                        </div>
                        <div className='px-8 flex gap-3 items-center md:w-[485px]'>
                            <p className='text-lg md:text-2xl'>We connect our customer with the best.</p>
                            <IoIosArrowDropdownCircle className='h-7 w-7' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section8
