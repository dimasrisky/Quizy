import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const QuizFinished = ({ correctPoint, incorrectPoint, username }) => {
  return (
    <>
        <div className='h-[100vh] bg-[url(/img/bg-primary.jpg)] bg-no-repeat bg-cover bg-center pt-[7rem]'>
            <div className='w-[80%] flex justify-between items-center mx-auto text-white'>
                <img src={`/img/${correctPoint >= (incorrectPoint + correctPoint) / 2 ? 'win.png' : 'lose.png'}`} className='w-[40%] mix-blend-screen' />
                <span className='h-[15rem] border border-white'></span>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h1 className='text-[3rem] font-lilita'>{correctPoint >= (incorrectPoint + correctPoint) / 2 ? `Congrats ${username} ✨` : `Sorry ${username} 😭`}</h1>
                        {correctPoint >= (incorrectPoint + correctPoint) / 2 ? <h3 className='font-lilita text-[1.5rem]'>You`ve answered the questions <br /> beautifully.</h3> : <h3 className='font-lilita text-[1.5rem]'>Most of your answers are <br /> incorrect. Try again next time!</h3> }
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4>Your score :</h4>
                        <div className='flex justify-between'>
                            <h5>Incorrect : {incorrectPoint}</h5>
                            <span className='border border-1 border-white h-[2rem]'></span>
                            <h5>Correct : {correctPoint}</h5>
                        </div>
                        <Link to={"/"} className='text-xs border border-white text-center px-8 py-3 rounded-md text-white transition-all duration-300 hover:bg-white hover:text-black'>Back To Home</Link>
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
