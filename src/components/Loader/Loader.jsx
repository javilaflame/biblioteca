import React from 'react'
import "./Loader.css"
import loaderImg from "../../assets/loader.svg"

const Loader = () => {
  return (
    <div className="loader flex items-center justify-center py-[4rem] px-[0]">
      <img src={loaderImg} className='w-[120px]' alt="" />
    </div>
  )
}

export default Loader