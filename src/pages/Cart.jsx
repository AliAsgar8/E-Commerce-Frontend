import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../component/Title';
import { assets } from '../assets/assets';
import CartTotal from '../component/CartTotal';

const Cart = () => {

  const { products, currency, cartItems, updateQuantity , navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    console.log("CartItems", cartItems);

    const tempData = [];

    // items means id and item mean size

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }

    setCartData(tempData);
  }, [cartItems])

  return (
    <div className='border-t pt-10'>

      <div className='text-2xl mb-10 '>
        <Title Title1={"YOUR"} Title2={"CART"} />
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            {/* console.log("productData" , productData); */ }

            return (
              <div key={index} className='border-t border-b py-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
                  <div>
                    <p className='text-xl font-medium'>{productData.name}</p>

                    <div className='flex items-center  gap-5 mt-2'>
                      <p className=''>{currency}{productData.price}</p>
                      <p className='border px-3 sm:py-1 bg-slate-50'>{item.size}</p>
                      <div className='flex items-center gap-2 sm:gap-10'>
                        <input onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-16 px-2 py-1' />
                        <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} alt="" className='w-6' />
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end mt-20'>
        <div className='w-full sm:w-[500px]'>
          <CartTotal />
          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('/place-order')} className='bg-black text-white px-8 py-3 text-sm'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      

      </div>




    </div>
  )
}

export default Cart
