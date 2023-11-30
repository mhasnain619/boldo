import React from 'react'
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import image1 from '../assets/image1.png'



const Section7 = () => {
    return (
        <div className='bg-gray-900 pb-10'>
            <div className='md:flex md:justify-around pt-10 mb-10 items-center'>
                <div className='p-8 md:w-[730px]'>
                    <h1 className='text-2xl md:text-5xl text-white md:leading-[55px]'>
                        An enterorise template to ramp up your company website
                    </h1>
                </div>
                <div>
                    <p className='hidden md:flex'>
                        <FiArrowLeftCircle className='h-14 w-14 text-white' />
                        <FiArrowRightCircle className='h-14 w-14 text-white' />
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-8'>
                <div className=' hidden md:block'>
                    <div className='w-96 p-10 bg-white text-black rounded-lg'>
                        <h1 className='text-4xl'>
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

                        </h1>
                        <div className='flex items-center gap-3 mt-10'>
                            <img src={image1} alt="img1" />
                            <div>
                                <p className='font-bold'>Albus Dumbordie</p>
                                <p className='text-[14px]'>Manager @howarts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-96 w-96 p-10 bg-white text-black rounded-lg'>
                        <h1 className='text-4xl'>
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

                        </h1>
                        <div className='flex items-center gap-3 mt-10'>
                            <img src={image1} alt="img1" />
                            <div>
                                <p className='font-bold'>Albus Dumbordie</p>
                                <p className='text-[14px]'>Manager @howarts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' hidden md:block'>
                    <div className='w-96 p-10 bg-white text-black rounded-lg'>
                        <h1 className='text-4xl'>
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit"
                        </h1>
                        <div className='flex items-center gap-3 mt-10'>
                            <img src={image1} alt="img1" />
                            <div>
                                <p className='font-bold'>Albus Dumbordie</p>
                                <p className='text-[14px]'>Manager @howarts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section7
