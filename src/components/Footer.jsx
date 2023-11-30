import React from 'react'
import footlogo from '../assets/footlogo.png'

const Footer = () => {
    return (
        <>
            <div className='md:h-[45vh]'>
                <div className='md:flex'>
                    <div className='p-5 md:p-10 md:w-96'>
                        <img src={footlogo} className='md:mb-8' alt="footimg" />
                        <p>Social media validation business model canvas graphical user interface launch party creative facebook ipad twitter</p>
                    </div>
                    <div className='flex'>
                        <div className='p-5 md:p-10 md:leading-[40px] md:w-80'>
                            <p className='text-lg font-bold md:mb-8'>Landings</p>
                            <p className='cursor-pointer font-semibold hover:text-black'>Home</p>
                            <p className='cursor-pointer font-semibold hover:text-black'>Products</p>
                            <p className='cursor-pointer font-semibold hover:text-black'>Services</p>
                        </div>
                        <div className='p-5 md:p-10 md:leading-[40px] md:w-80'>
                            <p className='text-lg font-bold md:mb-8'>Company</p>
                            <p className='cursor-pointer font-semibold hover:text-black'>Home</p>
                            <p className='cursor-pointer font-semibold hover:text-black'>Carrer</p>
                            <p className='cursor-pointer font-semibold hover:text-black'>Services</p>
                        </div>
                        <div className='p-5 md:p-10 md:leading-[40px] md:w-80'>
                            <p className='text-lg font-bold md:mb-8'>Resources</p>
                            <p className='cursor-pointer font-semibold hover:text-black'>Blog</p>
                            <p className='cursor-pointer font-semibold hover:text-black'>Products</p>
                            <p className='cursor-pointer font-semibold hover:text-black'>Services</p>
                        </div>
                    </div>
                </div>
                <hr className='' />
                <div className='flex justify-center items-center h-12'>
                    <p>
                        All Rights Reserved by <span className='text-slate-900 font-bold'>Envo Expert</span>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Footer
