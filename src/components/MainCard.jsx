import React from 'react'

const MainCard = ({image, forAlt, heading, para}) => {
  return (
    <div className='flex flex-col justify-between p-8 mx-auto'>
      <img src={image} alt={forAlt}/>
      <div>
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  )
}

export default MainCard