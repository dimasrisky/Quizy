import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import dataCategory from "../data/dataCategory"

const Category = () => {
    const [username, setUsername] = useState();
    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState("easy");

    const handleUsername = event  => setUsername( event.target.value )
    const handleCategory = event  => setCategory( event.target.value )
    const handleDifficulty = event  => setDifficulty( event.target.value )


    return (
        <>
        <div className='h-[100vh] bg-[url(../../public/img/bg-primary.jpg)] bg-no-repeat bg-cover bg-center pt-[5rem]'>
            <form className='w-[80%] mx-auto flex justify-between text-white items-center'>
                <h1 className='font-lilita text-[80px] scale-90'>Fill out the <br /> form to start <br /> the quiz!</h1>
                <span className='w-[2px] h-[23rem] border border-white'></span>
                <div className='w-[40%] border border-white px-[3rem] pt-[3rem] bg-[#6d6d6d39] scale-90'>
                    <img src="../../public/img/quizy-logo.png" className='mx-auto mb-[1.5rem]' width={'200px'}/>
                    <div className='flex flex-col '>
                        <label htmlFor="username" className='text-sm'>Username :</label>
                        <input onChange={handleUsername} type="text" placeholder='Type Your Name...' className='text-white bg-transparent border-b text-xs border-white py-2 focus:outline-none placeholder:text-white placeholder:italic' required />
                    </div>
                    <div className='flex flex-col mt-6 gap-3'>
                        <label htmlFor="category" className='text-xs'>Select Category :</label>
                        <select onChange={handleCategory} name="category" id="category" className='bg-transparent border-[0.1rem] border-white text-xs pl-2 py-2 rounded-lg focus:outline-white'>
                            {dataCategory?.map(eachCategory => <option value={eachCategory.id} key={eachCategory.id} className='text-black'>{eachCategory.category}</option>)}
                        </select>
                    </div>
                    <div className='flex flex-col mt-6 gap-3'>
                        <label htmlFor="category" className='text-xs'>Select Difficulty :</label>
                        <select onChange={handleDifficulty} name="category" id="category" className='bg-transparent border-[0.1rem] border-white text-xs pl-2 py-2 rounded-lg focus:outline-white'>
                            <option value="easy" className='text-black'>Easy</option>
                            <option value="medium" className='text-black'>Medium</option>
                            <option value="hard" className='text-black'>Hard</option>
                        </select>
                    </div>
                    <div className='flex items-center w-full text-black justify-center gap-1 py-8'>
                        <Link to={`/quiz/${category}/${difficulty}`} className='grow bg-white py-2 rounded-md text-xs text-center hover:bg-slate-300'>Start the quiz</Link>
                        <button type='reset' className='bg-white py-2 px-5 rounded-md text-xs hover:bg-slate-300'>Clear</button>
                    </div>
                </div>
            </form>
        </div>
        </>
  )
}

export default Category