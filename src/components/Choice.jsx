import React from 'react'

const Choice = ({ answer, click }) => {
  return (
    <>
        <button className='border border-white rounded-xl py-3 w-full hover:bg-white hover:text-black transition duration-300' onClick={click} value={answer}>{answer}</button>
    </>
  )
}

export default Choice