import React from 'react'
import hero from '../assets/hero graphics.svg'

const Section1 = () => {
    return (
        <div className='bg-gray-900  md:h-[100vh]'>
            <div className='grid md:grid-cols-2 '>
                <div className='p-8 md:p-12 md:h-[100vh] md:flex md:justify-center md:items-center'>
                    <div>
                        <h1 className='text-5xl mb-5 text-white leading-[60px] '>
                            Save time by building fast with Boldo Template
                        </h1>
                        <p className='text-gray-400  mb-5 leading-[30px]'>
                            Funding handshake byer business-to-business metrics ipad partnership first mover advantage innovator success deployment not discloure
                        </p>
                        <div className='flex space-x-3'>
                            <button className='px-7 md:px-10 py-3 bg-green-500 rounded-full font-bold'>
                                Buy Template
                            </button>
                            <button className='px-10 py-3 border text-white rounded-full font-bold'>
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
                <div className='p-8 md:flex md:justify-center md:items-center'>
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </div>
    )
}

export default Section1
