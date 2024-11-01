import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';



const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    // console.log(products);


    const [latestProduct, setLatestProduct] = useState([]);


    useEffect(() => {
        setLatestProduct(products.slice(0, 10));
    }, [])




    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title Title1={'LATEST'} Title2={'COLLECTIONS'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>

                {
                    latestProduct.map((item, index) => {
                        return(

                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        )     
                    })   
                }
            </div>

        </div>
    )
}

export default LatestCollection
