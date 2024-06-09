import Quiz from "./components/Quiz/Quiz"
import { useEffect, useState } from "react"
import {jsQuizz} from './constants'
function App() {
  const [questions, setQuestions] = useState([]);
 useEffect(()=>{
getQuestions();
 },[]) 
 const getQuestions = async()=>{
  try {
    const response = await fetch("https://644982a3e7eb3378ca4ba471.mockapi.io/questions")
    const questionsResponse = await response.json();
    // console.log(questionsResponse)
    const allQuestions = [...questionsResponse, ...jsQuizz.questions]
    setQuestions(allQuestions);
  } 
  catch (error) {
    console.log(error)
  }
 }

  return (questions.length && <Quiz questions = {questions}/>);
}

export default App
