const Choice = ({ answer, click }) => {
  return (
    <>
        <button className='border border-solid border-white rounded-xl py-3 w-full text-[0.8rem] md:text-[1rem] hover:bg-white hover:text-black transition duration-300' onClick={click} value={answer}>{answer}</button>
    </>
  )
}

export default Choice