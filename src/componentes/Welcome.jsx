import { QuizContext } from '../context/quiz'
import { useContext } from 'react'
import '../componentes/Welcome.css'
import Quiz from '../img/14.jpg'

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext)
  
  return (
    <div id='welcomeCotainer'>
        <h2>Seja bem-vinda</h2>
        <p>Clique no botão para iniciar:</p>
        <img src={Quiz} alt='inicio do quiz'></img>
        <button onClick={()=> dispatch({type:'CHANGE_STATE'})}>Iniciar</button>
    </div>
  )
}

export default Welcome