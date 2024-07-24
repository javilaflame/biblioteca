import React, { useEffect, useRef } from 'react'
import "./SearchForm.css"
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context.jsx'

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something...")
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("/book")
  }
  
  return (
    <div className="search-form w-[100%] max-w-[680px]">
      <div className="container">
        <div className="search-form-content">
          <form action="" className="search-form w-[100%] max-w-[680px]" onSubmit={handleSubmit}>
            <div className="search-form-elem px-[2.8rem] py-[1.4rem] rounded-[3.8rem] flex justify-between bg-white">
              <input type="text" className="form-control text-[2rem] p-[0.6rem] flex justify-center placeholder:opacity-[0.9] text-black" placeholder='The Lost World...' ref={searchText} />
              <button className="flex" onClick={handleSubmit}>
                <FaSearch className='text-[#8d27ae]' size={32}></FaSearch>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm