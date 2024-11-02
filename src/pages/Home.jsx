import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center bg-[url(/img/bg-secondary.webp)] bg-no-repeat bg-cover bg-center'>
        <div className='flex flex-col md:gap-2 font-lilita mx-auto text-center text-white w-[90%]'>
          <h1 className='text-[65px] md:text-[94px] md:leading-[3rem]'>Welcome to Quizy!</h1>
          <h3 className='text-[58.1px] hidden md:flex mx-auto tracking-[6%]'>Best place to train your knowledge.</h3>
          <p className='text-[18px] max-w-[855px] font-inter font-thin hidden md:flex mx-auto'>Find various of questions you can answer to increase your knowledge, we also provide various categories of questions ranging from education, history, animals to technology.</p>
          <Link to='category' className='font-inter font-medium text-[17px] md:text-[20px]'>
            <button className="w-[220px] h-[60px] md:w-[248px] md:h-[70px] bg-[#D9D9D9] bg-opacity-[10%] border-2 border-white border-solid rounded-[1rem] mx-auto my-4 transition-all duration-300 hover:bg-opacity-25 hover:border-opacity-75 hover:scale-105">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home