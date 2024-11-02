import { useState } from 'react'
import { Link } from 'react-router-dom';
import dataCategory from "../data/dataCategory"

const Category = () => {
    const [username, setUsername] = useState("bro");
    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState("easy");
    const handleUsername = event  => setUsername( event.target.value )
    const handleCategory = event  => setCategory( event.target.value )
    const handleDifficulty = event  => setDifficulty( event.target.value )


    return (
        <>
        <div className='w-screen h-screen flex items-center justify-center bg-[url(/img/bg-primary.webp)] bg-no-repeat bg-cover bg-center'>
            <form className='w-[80%] mx-auto flex flex-row justify-between text-white items-center'>
                {/* Title */}
                <h1 className='hidden md:flex font-lilita text-[60px]'>Fill out the <br /> form to start <br /> the quiz!</h1>
                <span className='hidden md:flex w-[2px] h-[23rem] border border-white border-solid'></span>
                {/* Form */}
                <div className='border-2 w-[451px] border-white px-[3rem] pt-[3rem] bg-[#6d6d6d39]'>
                    <img src="img/quizy-logo.webp" className='mx-auto mb-[1.5rem]' width={'200px'}/>
                    {/* Username Input */}
                    <div className='flex flex-col '>
                        <label htmlFor="username" className='text-sm'>Username :</label>
                        <input onChange={handleUsername} type="text" placeholder='Type Your Name...' className='text-white bg-transparent border-solid border-0 border-b-2 text-xs border-white py-2 focus:outline-none placeholder:text-white placeholder:italic' required />
                    </div>
                    {/* Category Input */}
                    <div className='flex flex-col mt-6 gap-3'>
                        <label htmlFor="category" className='text-xs'>Select Category :</label>
                        <select onChange={handleCategory} name="category" id="category" className='bg-transparent border-[0.1rem] border-solid border-white text-xs px-2 py-2 rounded-lg focus:outline-white'>
                            {dataCategory?.map(eachCategory => <option value={eachCategory.id} key={eachCategory.id} className='text-black'>{eachCategory.category}</option>)}
                        </select>
                    </div>
                    {/* Select Difficulty */}
                    <div className='flex flex-col mt-6 gap-3'>
                        <label htmlFor="category" className='text-xs'>Select Difficulty :</label>
                        <select onChange={handleDifficulty} name="category" id="category" className='bg-transparent border-[0.1rem] border-solid border-white text-xs pl-2 py-2 rounded-lg focus:outline-white'>
                            <option value="easy" className='text-black'>Easy</option>
                            <option value="medium" className='text-black'>Medium</option>
                            <option value="hard" className='text-black'>Hard</option>
                        </select>
                    </div>
                    {/* Submit button */}
                    <div className='flex items-center w-full text-black justify-center gap-1 my-8'>
                        <Link to={`/quiz/${category}/${difficulty}/${username}`} className='grow bg-white py-2 rounded-md text-xs text-center hover:bg-slate-300'>Start the quiz</Link>
                        <button type='reset' className='bg-white py-2 px-5 rounded-md text-xs hover:bg-slate-300'>Clear</button>
                    </div>
                </div>
            </form>
        </div>
        </>
  )
}

export default Category