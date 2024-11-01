import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import Title from '../component/Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../component/ProductItem';

const Collections = () => {

  const { products , search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const handleCategoryToggle = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const handleSubCategoryToggle = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice();

    if( showSearch && search  ){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productCopy)
  }


  const sortProduct = () => {

    let fpCopy = filterProduct.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProduct(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'High-low':
        setFilterProduct(fpCopy.sort((a, b) => (b.price - a.price)))
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    sortProduct();
  },[sortType])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search, showSearch])


  useEffect(() => {
    setFilterProduct(products);
  }, [])

  // check it they work properly or not
  // useEffect(() => {
  //   console.log(category);
  //   console.log(subCategory);

  // }, [category, subCategory])


  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  }


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Option */}

      <div className='min-w-60'>
        <div className='flex items-center gap-4 '>

          <p className='text-xl'>FILTER</p>
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} onClick={handleShowFilter} />
        </div>

        <div className={`border border-gray-300 pl-5 py-3 mt-11 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium mb-3'>CATEGORIES</p>

          <div className='flex flex-col text-sm text-gray-700'>
            <p className='flex gap-3 py-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={handleCategoryToggle} />Men
            </p>
            <p className='flex gap-3'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={handleCategoryToggle} />Women
            </p>
            <p className='flex gap-3 py-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={handleCategoryToggle} />Kids
            </p>
          </div>

        </div>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium mb-3'>TYPE</p>

          <div className='flex flex-col text-sm text-gray-700'>
            <p className='flex gap-3 py-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={handleSubCategoryToggle} />Topwear
            </p>
            <p className='flex gap-3'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={handleSubCategoryToggle} />Bottomwear
            </p>
            <p className='flex gap-3 py-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={handleSubCategoryToggle} />Winterwear
            </p>
          </div>

        </div>
      </div>


      {/* Right Side */}


      <div className='flex-1'>
        <div className='flex justify-between mb-10 sm:text-xl md:text-2xl lg:text-3xl'>
          <Title Title1={'ALL'} Title2={'COLLECTIONS'} />

          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by : Releavant</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="High-low">Sort by : High to Low</option>
          </select>
        </div>

        {/* Right Product */}

        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProduct.map((item, index) => {
              return (

                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              )

            })
          }

        </div>

      </div>
    </div>
  )
}

export default Collections
