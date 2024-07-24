import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar/>
        <div className="header-content flex justify-center items-center text-center text-white flex-col min-h-[75vh]">
          <h2 className='header-title capitalize text-[4.2rem] font-[600]'>find your book of choice</h2><br />
          <p className="header-text mt-[-1.8rem] mb-[2.8rem] opacity-[0.8] max-w-[770px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas efficitur, arcu in placerat varius, justo risus dapibus diam, 
            at sollicitudin neque nibh in neque. Sed et orci mollis, tempor nisi eget, 
            posuere purus. Maecenas accumsan dui ut nisl pulvinar lobortis. 
            Integer ac lectus at leo consectetur luctus nec vel ipsum.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header