import React from 'react'

const Section11 = () => {
    return (
        <div className='flex bg-gray-900 justify-center items-center'>
            <div className='mt-10 mb-10'>
                <h1 className='text-4xl text-white md:px-80 text-center mb-10'>An enterprise template to ramp up your company websiste</h1>
                <div className='flex-col flex md:flex-row md:justify-center md:gap-5 items-center mb-10 space-y-5 sm:space-y-0'>
                    <input type="text" className='pl-5 pr-20 py-4 rounded-full outline-none' placeholder='Your email address' />
                    <button className='px-28 md:px-14 py-4 rounded-full bg-green-700'>Start now</button>
                </div>
            </div>
        </div>
    )
}

export default Section11
