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
        {/*<p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} questões!</p>
        <img src={Welldone} alt='Fim de jogo'></img>
         <button onClick={()=> dispatch({type:'NEW_GAME'})}>Novo jogo</button> */}
         <h3>Pontuação final!</h3>
         <p>Não importa muito.</p>

         <p>Ju, você me inspira. Você me faz querer ser melhor. 
          Já te falei isso antes, mas preciso repetir: no começo, achei que seria apenas algo legal estar com você. 
          Mas, ao perceber o verdadeiro potencial de nós dois juntos, entendi que estamos construindo algo muito maior do que imaginei.</p>
         
         <p>Sempre digo, para quem quiser ouvir, que quero uma casa kasher, uma família judaica... mas, por um tempo, parei de realmente trabalhar por isso. 
          Subi alguns degraus, mas estacionei. 
          Já estou de volta nessa jornada e estou decidido a continuar subindo e se for ao teu lado vai ser ainda mais especial.</p>

          <p>Vamos fazer funcionar.</p>
          <p>Vamos acertar nossos pontos.</p>

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
        <p>





        </p>
        <a
          href={''}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#EF6351",
            color: "white",
            padding: "1px 2px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          não
        </a>
    </div>
  )
}

export default GameOver