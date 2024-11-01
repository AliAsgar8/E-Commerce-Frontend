import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [active, setActive] = useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col  border-t sm:flex-row gap-5 justify-between'>

      {/* Left Side */}
      <div className='left_place_order flex flex-col gap-5'>

        <div className='text-2xl my-10'>
          <Title Title1={"DELIVERY"} Title2={"INFORMATION"} />
        </div>

        <div className='flex gap-3'>
          <input type="text" placeholder='FirstName' className=' border border-gray-300 px-3.5 py-1.5 w-full' />
          <input type="text" placeholder='LastName' className=' border border-gray-300 px-3.5 py-1.5 w-full' />
        </div>

        <input type="email" placeholder='Email' className=' border border-gray-300 px-3.5 py-1.5 w-full' />
        <input type="text" placeholder='Street' className=' border border-gray-300 px-3.5 py-1.5 w-full' />

        <div className='flex gap-3'>
          <input type="text" placeholder='City' className=' border border-gray-300 px-3.5 py-1.5 w-full' />
          <input type="text" placeholder='State' className=' border border-gray-300 px-3.5 py-1.5 w-full' />
        </div>

        <div className='flex gap-3'>
          <input type="text" placeholder='Zipcode' className=' border border-gray-300 px-3.5 py-1.5 w-full' />
          <input type="text" placeholder='Country' className=' border border-gray-300 px-3.5 py-1.5 w-full' />
        </div>
        <input type="number" placeholder='Phone' className=' border border-gray-300 px-3.5 py-1.5 w-full' />
      </div>


      {/* Right Side */}
      <div className="right_place_order mt-8">
        <div className='min-w-80 mt-8'>
          <CartTotal />
        </div>

        <div className='my-10'>
          <Title Title1={"PAYMENT"} Title2={"METHOD"}></Title>
        </div>

        <div className='flex flex-col gap-3 lg:flex-row'>

        <div className='flex gap-2 items-center border px-3 py-2 cursor-pointer'>
          <p onClick={() => setActive('stripe')} className={`h-4 w-4 border rounded-full  ${active === 'stripe'? 'bg-green-500' : 'bg-white'}`}></p>
          <img src={assets.stripe_logo} alt=""  className='h-6 mx-4'/>
        </div>
        <div className='flex gap-2 items-center border px-3 py-2 cursor-pointer'>
          <p onClick={() => setActive('razorpay')}  className={`h-4 w-4 border rounded-full  ${active === 'razorpay' ? 'bg-green-500' : 'bg-white'}`}></p>
          <img src={assets.razorpay_logo} alt=""  className='h-6 mx-4'/>
        </div>
        <div className='flex gap-2 items-center border px-3 py-2 cursor-pointer'>
          <p onClick={() => setActive('cod')} className={`h-4 w-4 border rounded-full  ${active === 'cod'? 'bg-green-500' : 'bg-white'}`}></p>
         <p className='text-sm font-medium text-gray-400 '>CASH ON DELIVERY</p>
        </div>

        </div>

        <div className='mt-5 text-end w-full'>
          <button onClick={() => navigate('/order')} className='text-sm font-medium bg-black text-white px-8 py-3'>PLACE ORDER</button>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
