import { RESULT_TITLES } from '../quiz/useQuiz'
import wario from '../assets/wario.png'
import luma from '../assets/luma.png'
import mario from '../assets/mario.png'
import logo from '../assets/logo-etic.png'
import coin from '../assets/coin.png'
import pipe from '../assets/pipe.png'
import starFull from '../assets/star-full.png'
import starEmpty from '../assets/star-empty.png'

// Sol de briques + petit logo ETIC centré au-dessus, sur tous les écrans.
const Floor = ({ withLogo = true }) => (
  <>
    {withLogo && <img className="logo" src={logo} alt="ETIC" />}
    <div className="floor" aria-hidden="true" />
  </>
)

function Hud({ coins, center, right }) {
  return (
    <header className="hud">
      <div className="coins"><img src={coin} alt="" /><span>{coins}</span></div>
      <div className="mid">{center}</div>
      <div className="right">{right}</div>
    </header>
  )
}

export function Home({ onStart }) {
  return (
    <main className="screen home">
      <img className="wario" src={wario} alt="" />
      <img className="luma" src={luma} alt="" />
      <img className="mario" src={mario} alt="" />
      <h1 className="title">READY TO GUESS??</h1>
      <button className="btn big" onClick={onStart}>TAP TO PLAY</button>
      <Floor />
    </main>
  )
}

export function Quiz({ quiz }) {
  const { question, index, total, coins, selected, answer } = quiz
  const picked = selected !== null
  const pickedCorrect = picked && question.correctAnswers.includes(selected)

  const stateOf = (i) => {
    const correct = question.correctAnswers.includes(i)
    if (!picked) return ''
    if (i === selected) return correct ? 'ok' : 'ko'
    // bonnes réponses révélées après une erreur ; si plusieurs réponses sont justes (Q15), toutes passent au vert
    return correct && (!pickedCorrect || question.correctAnswers.length > 1) ? 'ok' : ''
  }

  return (
    <main className="screen quiz">
      <Hud coins={coins} center={<img className="hudlogo" src={logo} alt="ETIC" />} right={<span className="count">{index + 1}/{total}</span>} />
      <h2 className="kw">{question.keyword}</h2>
      <p className="q">{question.question}</p>
      <div className="grid">
        {question.options.map((option, i) => (
          <button key={i} className={`opt ${stateOf(i)}`} disabled={picked} onClick={() => answer(i)}>
            {option}
          </button>
        ))}
      </div>
      <img className="pipe l" src={pipe} alt="" />
      <img className="pipe r" src={pipe} alt="" />
      <Floor withLogo={false} />
    </main>
  )
}

export function Result({ quiz }) {
  const { coins, score, total, stars, restart } = quiz
  return (
    <main className="screen">
      <Hud coins={coins} center={<span className="nice">NICE RUN!</span>} />
      <div className="stars">
        {[0, 1, 2].map((i) => <img key={i} src={i < stars ? starFull : starEmpty} alt="" />)}
      </div>
      <h2 className="rtitle">{RESULT_TITLES[stars]}</h2>
      <p className="score"><img src={coin} alt="" />{score}/{total} CORRECT</p>
      <button className="btn" onClick={restart}>PLAY AGAIN</button>
      <Floor />
    </main>
  )
}
