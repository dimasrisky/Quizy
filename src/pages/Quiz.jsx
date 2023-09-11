import { useEffect, useState } from 'react'
import QuizStarted from '../components/QuizStarted'
import QuizFinished from "../components/QuizFinished"
import { useParams } from 'react-router-dom'

const Quiz = () => {
  const { category, difficulty, username } = useParams()
  const [ correctPoint, setCorrectPoint ] = useState(0)
  const [ incorrectPoint, setIncorrectPoint] = useState(0)
  const [ state, setState ] = useState("playQuiz")
  const [fetchData, setFetchData] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple&`)
        const data = await response.json();
        setFetchData(data.results)
      } catch (error) {
        console.log("Error bang");
      }
    }
    getData()
  }, [category, difficulty])
  
  return (
    <>
      { state === "playQuiz" && <QuizStarted dataQuiz={fetchData} setCorrectPoint={setCorrectPoint} setIncorrectPoint={setIncorrectPoint} setState={setState} />}
      { state === "endQuiz" && <QuizFinished correctPoint={correctPoint} incorrectPoint={incorrectPoint} username={username} />}
    </>
  )
}

export default Quiz