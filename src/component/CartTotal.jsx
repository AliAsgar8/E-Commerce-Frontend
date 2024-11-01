import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getTotalAmount } = useContext(ShopContext);

    return (
        <div>
            <div className='text-2xl mb-5'>
                <Title Title1={"CARTS"} Title2={"TOTAL"} />
            </div>

            <div className='flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <p>SubTotal</p>
                    <p>{currency}{getTotalAmount()}</p>
                    
                </div>
                <hr />  
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency}{delivery_fee}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency}{getTotalAmount() === 0 ? 0 : getTotalAmount() + delivery_fee }</b>

                </div>

            </div>

        </div>
    )
}

export default CartTotal
