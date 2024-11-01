import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
        <div className='flex flex-col py-20 items-center flex-wrap sm:flex-row justify-around gap-12  md:text-base text-gray-700 '>

            <div className='flex flex-col items-center text-center'>
                <div>
                    <img src={assets.exchange_icon} alt="" />
                </div>
                <p className='font-semibold py-2'>Easy Exchange Policy</p>
                <p className='text-gray-600'>We offer hassle free exchange policy</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <div>
                    <img src={assets.quality_icon} alt="" />
                </div>
                <p className='font-semibold py-2'>7 Days Return Policy</p>
                <p className='text-gray-600'>We provide 7 Days Free policy</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <div>
                    <img src={assets.support_img} alt="" />
                </div>
                <p className='font-semibold py-2'>Best Customer Support</p>
                <p className='text-gray-600'>We Provide 24/7 Customer Support</p>
            </div>

        </div>

    )
}

export default OurPolicy
