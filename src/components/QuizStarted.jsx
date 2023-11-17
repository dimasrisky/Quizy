import { useState } from 'react'
import Choice from './Choice'
import PropTypes from 'prop-types';
import he from 'he'

const QuizStarted = ({ dataQuiz, setCorrectPoint, setIncorrectPoint, setState }) => {
  const [count, setCount] = useState(0)
  const question = dataQuiz && dataQuiz[count]? dataQuiz[count].question : "";
  const decodedQuestion = he.decode(question)
  let newAnswers = dataQuiz[count]?.incorrect_answers.concat([dataQuiz[count]?.correct_answer]).sort(() => Math.random() - 0.5)

  const handleChoice = ( event ) => {
    count === dataQuiz.length - 1 && setState("endQuiz")
    const choice = event.target.value
    choice === dataQuiz[count]?.correct_answer? setCorrectPoint(prev => prev + 1) : setIncorrectPoint(prev => prev + 1)
    setCount(prev => prev + 1)
  }
  
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center bg-[url(/img/bg-primary.jpg)] bg-no-repeat bg-cover bg-center text-white pt-[20vh] text-center'>
        <div className='flex flex-col items-center w-[80%] mx-auto'>
          <h1 className='font-lilita text-[1.2rem] lg:text-[1.5rem] mb-6'>{decodedQuestion}</h1>
          <div className='flex flex-col items-center gap-5 w-full'>
            {newAnswers?.map(eachAnswers => <Choice key={eachAnswers} answer={he.decode(eachAnswers, {'isAttributeValue' : false})} click={handleChoice} />)}
          </div>
        </div>
      </div>
    </>
  )
}
QuizStarted.propTypes = {
  dataQuiz: PropTypes.array.isRequired,
  setCorrectPoint: PropTypes.func.isRequired,
  setIncorrectPoint: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired
}


export default QuizStarted