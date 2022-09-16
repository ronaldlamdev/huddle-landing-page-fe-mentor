import React from 'react'

const MainCard = ({image, forAlt, heading, para}) => {
  return (
    <div className='bg-white rounded-lg shadow-xl flex flex-col justify-between items-center text-center p-8 mx-auto gap-8'>
      <img src={image} alt={forAlt}/>
      <div className='flex flex-col justify-between gap-4'>
        <h1 className='text-2xl'>{heading}</h1>
        <p className='text-[#808d99] text-lg'>{para}</p>
      </div>
    </div>
  )
}

export default MainCard