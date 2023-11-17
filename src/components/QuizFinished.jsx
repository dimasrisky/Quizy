import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const QuizFinished = ({ correctPoint, incorrectPoint, username }) => {
  return (
    <>
        <div className='h-screen w-screen flex justify-center items-center bg-[url(/img/bg-primary.jpg)] bg-no-repeat bg-cover bg-center'>
            <div className='w-[85%] md:w-[80%] flex flex-col md:flex-row justify-between items-center mx-auto text-white md:gap-[4rem]'>
                <img src={`/img/${correctPoint >= (incorrectPoint + correctPoint) / 2 ? 'win.png' : 'lose.png'}`} className='mix-blend-screen w-[20rem] md:w-[40%]' />
                <span className='h-[70vh] hidden md:flex border border-white border-solid'></span>
                <div className='flex w-full flex-col gap-4'>
                    <div>
                        <h1 className='text-[2.5rem] md:text-[3.5rem] font-lilita'>{correctPoint >= (incorrectPoint + correctPoint) / 2 ? `Congrats ${username} ✨` : `Sorry ${username} 😭`}</h1>
                        {correctPoint >= (incorrectPoint + correctPoint) / 2 ? <h3 className='font-lilita text-[1.4rem] md:text-[2rem] tracking-wide leading-[2rem]'>You`ve answered the questions <br /> beautifully.</h3> : <h3 className='font-lilita text-[1.4rem] md:text-[2rem] tracking-wide leading-[2rem]'>Most of your answers are <br /> incorrect. Try again next time!</h3> }
                    </div>
                    <div className='flex flex-col font-lilita mt-[2rem]'>
                        <h4 className='tracking-wider text-[1rem] md:text-[1.3rem]'>Your score :</h4>
                        <div className='flex justify-start text-[1rem] md:text-[1.3rem] mt-2 gap-3'>
                            <h5 className='tracking-wider text-[#FF4B4B]'>Incorrect : {incorrectPoint}</h5>
                            <span className='hidden md:flex border border-1 border-white border-solid h-[2rem]'></span>
                            <h5 className='tracking-wider text-[#25FF12]'>Correct : {correctPoint}</h5>
                        </div>
                        <Link to={"/"} className='mt-4 text-xs border border-white border-solid text-center px-8 py-3 rounded-md text-white transition-all duration-300 hover:bg-white hover:text-black'>Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

QuizFinished.propTypes = {
    correctPoint: PropTypes.number.isRequired,
    incorrectPoint: PropTypes.number.isRequired,
    username: PropTypes.string
}

export default QuizFinished
