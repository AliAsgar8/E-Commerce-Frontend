import React from 'react'

const Title = ({Title1, Title2}) => {
  return (
    <div className='flex justify-center items-center'>
      <p className='text-gray-500'>{Title1} <span className='text-gray-700'>{Title2}</span> </p>
      <p className='w-8 sm:w-12 h-[1px] bg-gray-700'></p>
    </div>
  )
}

export default Title
