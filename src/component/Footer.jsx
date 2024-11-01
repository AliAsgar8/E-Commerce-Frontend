import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>

                <img src={assets.logo} alt="" className='mb-5 w-32' />
                <p className='w-full text-gray-600 md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit delectus ut temporibus id optio doloremque tenetur corrupti est vero voluptatibus sint corporis fugit provident ad ullam, nisi voluptas itaque.</p>
            </div>

            
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-000-000-0000</li>
                        <li>greatstackdev@gmail.com</li>
                        <li>Instagram</li>
                    </ul>

                </div>
            
        </div>
    )
}

export default Footer
