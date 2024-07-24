import React from 'react'
import "./Book.css"
import { Link } from 'react-router-dom'

const Book = (book) => {
  return (
    <div className='book-item rounded-[4px] flex flex-col justify-between bg-white px-[2rem] py-[3rem]'>
      <div className="book-item-img max-w-[180px] mr-[auto] ml-[auto]">
        <img src={book.cover_img} alt="" />
      </div>
      <div className="book-item-info mt-[2rem] text-center">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-item title leading-[1.4] mb-[0.8rem] font-[700] text-[1.8rem]">
            <span>{book.title}</span>
          </div>
        </Link>
        <div className="book-item-info-item author leading-[1.4] mb-[4px] text-[1.5rem]">
          <span className='capitalize font-[700]'>Author: </span>
          <span>{book.auhtor && book.author.join(", ")}</span>
        </div>
        <div className="book-item-info-item edition-count text-[1.5rem]">
          <span className='capitalize font-[700]'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>
        <div className="book-item-info-item publish-year opacity-[0.6] italic text-[14px]">
          <span className='capitalize font-[700]'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  )
}

export default Book