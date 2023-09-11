import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='h-[110vh] bg-[url(../../public/img/bg-secondary.jpg)] bg-no-repeat bg-cover bg-center p-44'>
        <div className='flex flex-col gap-4 font-lilita mx-auto text-center text-white'>
          <h1 className='text-[4rem] -mb-8'>Welcome to Quizy!</h1>
          <h3 className='text-[2.5rem]'>Best place to train your knowledge.</h3>
          <p className='text-[0.8rem] font-inter font-thin'>Find various of questions you can answer to increase your knowledge, we <br /> also provide various categories of questions ranging from education, <br /> history, animals to technology.</p>
          <Link to={'category'} className='w-[11rem] py-[0.8rem] bg-[#d9d9d928] border border-white rounded-md mx-auto my-4 hover:bg-white hover:text-black transition duration-200'>Get Started</Link>
        </div>
      </div>
    </>
  )
}

export default Home