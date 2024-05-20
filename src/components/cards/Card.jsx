import React from 'react'

const Card = ({name, img, statistics}) => {
  console.log(name)
  

  return (
    <div className='card-player'>
       <img src={img} alt=""  />
       <h4>{name}</h4>
    </div>
  )
}

export default Card