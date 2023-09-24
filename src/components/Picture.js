import React from 'react'

const Picture = ({ data }) => {
  return (
    <div className='picture'>
      <div className='imageContainer'>
        <img src={data.src.large} alt="" />
        <div className='detial'>
          <div className='author'>
            <h3>Author.</h3>
            <h1>{data.photographer}</h1>
          </div>
          <div className='download-btn'>
            <a href={data.src.large} target='_blank' rel="noreferrer">Download Iamge</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Picture