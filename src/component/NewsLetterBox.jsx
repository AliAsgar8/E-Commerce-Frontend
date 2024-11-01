import React from 'react'

const NewsLetterBox = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='text-black font-semibold sm:text-4xl pb-5'>Subscribe now & get 20% off</p>

            <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 border mx-auto'>
                <input type="email" placeholder='Enter Your Email' className='outline-none w-full sm:flex-1 pl-2' required />
                <button className='bg-black px-5  py-3 text-sm  text-white'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox
