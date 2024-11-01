import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../component/Title';
import { assets } from '../assets/assets';

const Order = () => {

  const { products, currency } = useContext(ShopContext);


  return (
    <div className='border-t pt-14'>

      <div className='text-2xl  flex justify-start mb-5'>
        <Title Title1={"MY"} Title2={"ORDERS"} />
      </div>

      <div>
        {
          products.slice(1, 4).map((item, index) => {
            return (
              <div key={index} className='border-t border-b py-4 flex flex-col  md:flex-row  md:justify-between  md:items-center gap-4'>

                <div className='flex items-start gap-10 text-sm'>
                  <img src={item.image[0]} alt="" className='w-16 sm:w-20' />

                  <div className='flex flex-col gap-2 justify-center'>

                    <p className='sm:text-base font-medium'>{item.name}</p>

                    <div className='flex items-center gap-6 text-sm'>
                      <p className='text-lg'>{currency}{item.price}</p>
                      <p>Quality:1</p>
                      <p>Size:M</p>
                    </div>

                    <div>
                      <p>Date:<span className='text-gray-500'>23,Oct,2024 </span></p>
                    </div>

                  </div>
                </div>

                <div className='w-80 gap-3 flex items-center sm:w-1/2 sm:justify-between '>
                  <div className='flex gap-2 items-center'>
                    <p className='h-2 w-2 border rounded-full bg-green-400'></p>
                    <p className='sm:text-base font-medium'>Ready to ship</p>
                  </div>
                  <button className='border px-5 py-3 text-sm font-medium'>Track Order</button>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Order
