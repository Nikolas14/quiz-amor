import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './GameOver.css'

import Welldone from '../img/0.jpg'

const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id='gameoverConntainer'>
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} questões!</p>
        <img src={Welldone} alt='Fim de jogo'></img>
        <button onClick={()=> dispatch({type:'NEW_GAME'})}>Novo jogo</button>
    </div>
  )
}

export default GameOver