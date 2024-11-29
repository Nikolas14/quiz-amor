import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './GameOver.css'

import Welldone from '/img/1.jpg'

const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext)

    const phoneNumber = "5591985598030"; // Substitua pelo número desejado
    const message = "Vamos fazer nossa casa feliz e kasher!"; // Mensagem opcional

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div id='gameoverConntainer'>
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} questões!</p>
        <img src={Welldone} alt='Fim de jogo'></img>
        {/* <button onClick={()=> dispatch({type:'NEW_GAME'})}>Novo jogo</button> */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#6BA368",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Vamos fazer nossa casa feliz e kasher?
        </a>
    </div>
  )
}

export default GameOver