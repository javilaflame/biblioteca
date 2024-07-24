import React from 'react'
import "./About.css"
import aboutImg from "../../assets/about-img.jpg"

const About = () => {
  return (
    <section className="about px-[3rem] py-[3rem]">
      <div className="container">
        <div className="section-title">
          <h2 className='font-[600] uppercase pt-[18px] pb-[24px] px-0 text-[25px]'>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img className='w-[520px]' src={aboutImg} alt="" srcset="" />
          </div>
          <div className="about-text">
            <h2 className='about-title my-[1rem] mx-0 text-[2.6rem] tracking-[1px]'>About BookHub</h2>
            <p className="text-[1.7rem] my-[1.8rem] mx-0 opacity-[0.8]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aspernatur ipsum vitae velit ut exercitationem eius necessitatibus facere similique fuga odit adipisci, unde voluptas modi! Dolore repellendus laboriosam nihil incidunt quisquam nesciunt ducimus vero officia doloribus! Perspiciatis dolorem temporibus laborum velit iste sint labore nam.</p>
            <p className='text-[1.7rem] my-[1.8rem] mx-0 opacity-[0.8]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam ipsum quidem voluptatibus saepe accusantium sed doloremque maiores ad facere omnis, consequuntur tempore distinctio iusto aut eaque mollitia ducimus adipisci.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About