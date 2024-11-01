import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {
    const { products } = useContext(ShopContext);

    const [bestSellers, setBestSellers] = useState([]);

    console.log(bestSellers);

    useEffect(() => {
        // const bestProduct = products.filter((curr) => (curr.bestSeller));
        // setBestSellers(bestProduct.slice(0, 5));

        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        // Select the first 5 shuffled products
        setBestSellers(shuffledProducts.slice(0, 5));

        // setBestSellers(products.slice(0, 5));
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title Title1={'BEST'} Title2={'SELLER'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>

                {
                    bestSellers.map((item, index) => (

                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
