import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../component/Title';
import ProductItem from '../component/ProductItem';
import RelatedProduct from '../component/RelatedProduct';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart, cartItems } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');



  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        return null;

      }
    })
  }




  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  // console.log(producId);


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* Product Data */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col sm:flex-row'>
          <div className='flex sm:flex-col  sm:justify-normal sm:w-[18.7%] w-full mr-3'>
            {
              productData.image.map((item, index) => {
                return (
                  <img onClick={() => setImage(item)} src={item} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' />
                )
              })
            }

          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto' />
          </div>

        </div>
        {/* Product Data */}

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-3'>{productData.name}</h1>
          <div className='flex items-center gap-2 mt-2'>
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className='pl-2'>(122)</p>

          </div>

          <p className='mt-5 font-medium text-3xl'>{currency}{productData.price}</p>
          <p className='text-gray-500 text-xl mt-5 md:w-3/4'>{productData.description}</p>

          <div className='flex flex-col mt-5'>
            <p className='font-medium text-xl'>Selected Sizes</p>
            <div className='flex gap-3 mt-5'>
              {
                productData.sizes.map((item, index) => {
                  return (
                    <button onClick={() => setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-200' : ''}`}>{item}</button>
                  )
                })
              }

            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className='text-center font-medium text-sm bg-black active:bg-gray-700 text-white py-3 px-8 mt-8'>ADD TO CART</button>
          <p className='border-b mt-8 text-gray-600'></p>

          <div className='flex flex-col text-gray-500 mt-5  gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>

          </div>

        </div>



      </div>


      {/* -------------------Description and Review--------------------- */}

      <div className='mt-20'>

        <div className='flex'>
          <p className='border px-5 py-3'>Description</p>
          <p className='border px-5 py-3'>Review(122)</p>
        </div>

        <div className='flex flex-col px-5 py-5 border text-gray-600'>
          <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore aspernatur quaerat cumque. Vitae non, totam nemo dicta mollitia doloremque nam eveniet sit neque numquam cum nobis, rem, cupiditate accusamus dolor. Unde nostrum adipisci voluptatibus in amet facere consequuntur maxime neque inventore ipsam minima, sunt fugit ratione veritatis minus sit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, autem alias architecto nihil hic laudantium est ex? Quos aut incidunt velit, accusantium ducimus quis ab nisi laboriosam quisquam minima tenetur?</p>

        </div>

      </div>

      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default Product
