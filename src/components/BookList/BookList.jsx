import React from 'react'
import "./BookList.css"
import { useGlobalContext } from '../../context'
import Loader from '../Loader/Loader'
import coverImg from "../../assets/cover_not_found.jpg"
import Book from '../Book/Book'

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((book)=>{
    return {
      ...book,
      id: (book.id).replace("/works/", ""),
      cover_img: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : coverImg
    }
  })

  if(loading) return <Loader></Loader>;

  return (
    <section className="booklist px-0 py-[3rem] bg-white">
      <div className="container">
        <div className="section-title">
          <h2 className='font-[600] uppercase pt-[18px] pb-[24px] px-0 text-[25px]'>{resultTitle}</h2>
        </div>
        <div className="booklist-content gap-[3rem] grid">
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key={index} {...item}></Book>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList