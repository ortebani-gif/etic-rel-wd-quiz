import { useQuiz } from './quiz/useQuiz'
import { Home, Quiz, Result } from './components/Screens'

export default function App() {
  const quiz = useQuiz()
  if (quiz.screen === 'quiz') return <Quiz quiz={quiz} />
  if (quiz.screen === 'result') return <Result quiz={quiz} />
  return <Home onStart={quiz.start} />
}
