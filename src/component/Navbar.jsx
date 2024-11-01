import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCount } = useContext(ShopContext);


    return (
        <div className='py-7 flex justify-between items-center'>

            <div className='w-36'>
                <Link to='/'>
                    <img src={assets.logo} alt="" className='h-[100%] w-[100%]' />
                </Link>
            </div>


            <div >
                <ul className='hidden sm:flex  gap-5 text-sm text-gray-700 '>
                    <NavLink to='/' className='flex flex-col justify-center items-center  text-xl'>
                        <p >Home</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to='collection' className='flex flex-col justify-center items-center text-xl'>
                        <p>Collection</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to='/about' className='flex flex-col justify-center items-center text-xl'>
                        <p>About</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to='/contact' className='flex flex-col justify-center items-center text-xl'>
                        <p>Contact</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </ul>
            </div>

            <div className='flex items-center gap-5'>
                <div className='w-5 cursor-pointer'>
                    <img src={assets.search_icon} alt="" className='h-[100%] w-[100%]' onClick={() => setShowSearch(true)} />
                </div>

                <div className='group relative'>
                    <div className='w-5 '>
                        <Link to='/login'>   <img src={assets.profile_icon} alt="" className='h-[100%] w-[100%] cursor-pointer' /></Link>
                    </div>
                    <div className='group-hover:block hidden absolute  right-0 pt-4'>
                        <div className='flex flex-col w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='hover:text-black cursor-pointer'>My Profile</p>
                            <p className='hover:text-black cursor-pointer'>Order</p>
                            <p className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <Link to='/cart' >
                        <div className='w-5'>
                            <img src={assets.cart_icon} alt="" className='h-[100%] w-[]' />
                        </div>
                        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 aspect-square text-[8px] bg-black text-white rounded-full'>{getCount()}</p>
                    </Link>
                </div>

                <div className='hamburger'>
                    <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden' />
                </div>


            </div>

            {/* Sidebar for small screen */}

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'} `}>
                <div className='flex flex-col text-gray-600'>
                    <div className='flex text-gray-500 items-center gap-5 p-4' onClick={() => setVisible(false)}>
                        <img src={assets.dropdown_icon} alt="" className='w-3 rotate-180' />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border'>Home</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'>Collection</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'>About</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'>Contact</NavLink>
                </div>

            </div>

        </div>
    )
}

export default Navbar
