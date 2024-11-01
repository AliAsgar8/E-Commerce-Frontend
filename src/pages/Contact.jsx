import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../component/NewsLetterBox'

const Contact = () => {
  return (
    <div className='border-t pt-10'>
      <div className='text-2xl'>
        <Title Title1={"CONTACT"} Title2={"US"} />
      </div>

      <div className='flex flex-col justify-center mt-14 mb-20 gap-10 md:flex-row items-center '>
        <div className='h-[500px] w-[500px]'>
          <img src={assets.contact_img} alt="" className='h-[100%] w-[100%]'/>
        </div>

        <div className='flex flex-col gap-5 '>
          <p className='text-gray-900 text-2xl'>Our Store</p>
          <div className='text-gray-500'>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>

          <div className='text-gray-500'>
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>

          <div className='text-xl text-gray-900'>
            Careers at Forever
          </div>

          <p className='text-gray-500'>Learn more about our teams and job openings.</p>

          <button className='border px-5 py-3 text-sm font-medium w-1/2 hover:bg-black hover:text-white duration-200'>Explore Jobs</button>
        </div>
      </div>



      <NewsLetterBox/>
    </div>
  )
}

export default Contact
