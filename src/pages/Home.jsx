import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center bg-[url(/img/bg-secondary.jpg)] bg-no-repeat bg-cover bg-center'>
        <div className='flex flex-col gap-4 font-lilita mx-auto text-center text-white w-[90%]'>
          <h1 className='text-[2.8em] leading-[3rem] tracking-wider'>Welcome to Quizy!</h1>
          <h3 className='text-[2.5rem] hidden md:flex mx-auto'>Best place to train your knowledge.</h3>
          <p className='text-[0.8rem] font-inter font-thin hidden md:flex mx-auto'>Find various of questions you can answer to increase your knowledge, we <br /> also provide various categories of questions ranging from education, <br /> history, animals to technology.</p>
          <button className='w-[11rem] py-[0.4rem] text-[1rem] bg-white border-2 border-white border-solid text-black rounded-[1rem] mx-auto my-4'>
            <Link to='category'>Get Started</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Home