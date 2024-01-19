import { useContext, useEffect } from 'react'
import './App.css'
import Welcome from './componentes/Welcome'
import { QuizContext } from './context/quiz'
import Question from './componentes/Question'
import GameOver from './componentes/GameOver'


function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(()=>{
    dispatch({type:'REORDER_QUESTIONS'})
  },[])

  return (
    <section className='App'>
      <h1>Quiz de relacionamento</h1>
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}

    </section>
  )
}

export default App
