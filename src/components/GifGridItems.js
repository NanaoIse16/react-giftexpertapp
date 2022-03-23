import React from 'react'

const GifGridItems = ({ title, url}) => {
  
    return (

    <div className='card animate__animated animate__bounce '>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default GifGridItems