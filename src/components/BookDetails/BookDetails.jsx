import React, { useEffect, useState } from 'react'
import "./BookDetails.css"
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import coverImg from "../../assets/cover_not_found.jpg"
import { FaArrowLeft } from 'react-icons/fa'

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[1]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id])

  if(loading) return <Loader></Loader>

  return (
    <section className="book-details py-[6rem] px-[6rem]">
      <div className="container">
        <button className="flex justify-center back-btn ml-[20px] mb-[2.6rem] hover:text-[#8d27ae]" onClick={()=>navigate('/book')}>
          <FaArrowLeft size={22}></FaArrowLeft>
          <span className='text-[1.8rem] font-[800] ml-[1rem]'>Go Back</span>
        </button>
        <div className="book-details-content grid gap-[4rem]">
          <div className="book-details-img max-h-[600px] px-[45px] overflow-hidden">
            <img className='my-0 mx-auto w-[100%] h-[100%] object-cover' src={book?.cover_img} alt="" />
          </div>
          <div className="book-details-info overflow-y-scroll max-h-[600px] p-[1.4rem]">
            <div className="book-details-item mb-[1.4rem] title">
              <span className="font-[600] text-[2.4rem]">{book?.title}</span>
            </div>
            <div className="book-details-item mb-[1.4rem] description opacity-[0.8]">
              <span>{book?.description}</span>
            </div>
            <div className="book-details-item mb-[1.4rem]">
              <span className="font-[600]">Subject Times: </span>
              <span className="italic">{book?.subject_times}</span>
            </div>
            <div className="book-details-item mb-[1.4rem]">
              <span className="font-[600]">Subject Places: </span>
              <span className="italic">{book?.subject_places}</span>
            </div>
            <div className="book-details-item mb-[1.4rem]">
              <span className="font-[600]">Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails