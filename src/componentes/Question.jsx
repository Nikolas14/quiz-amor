import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import './Question.css'
import Option from "./Option"

const imagemRandom = () => {

  let x = Math.floor(Math.random() * 10)
    return "src/img/"+x+".jpg"
}

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
        dispatch({
            type:"CHECK_ANSWER",
            payload:{answer:currentQuestion.answer,option}
        })
  }

  return (
    <div id="questioContainer">
        <img src={currentQuestion.img}/>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h3>{currentQuestion.question}</h3>
        <div id="optionsContainer">
            {currentQuestion.options.map((option)=>(
            <Option 
            key={option} 
            option={option} 
            answer={currentQuestion.answer}
            selectOption={()=>onSelectOption(option)} 
            />
            ))}
      </div>
      <div>
        {quizState.answerSelected && 
            <button onClick={()=> dispatch({type:'CHANGE_QUESTION'})}>Continuar</button>
        }
      </div>
    </div>
  )
}

export default Question