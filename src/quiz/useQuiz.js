import { useEffect, useReducer, useRef } from 'react'
import { buildDeck, QUIZ_LENGTH } from '../data/questions'
import successSound from '../assets/pickupCoin.wav' // pour changer le son : remplacer ce fichier
import errorSound from '../assets/ERROR.mp3' // idem pour le son d'erreur

export const POINTS_PER_CORRECT = 1
export const COINS_PER_CORRECT = 100 // état distinct de score
export const ADVANCE_DELAY_MS = 1100
export const WRONG_ADVANCE_DELAY_MS = 1900// délai après une mauvaise réponse
export const TWO_STARS_MIN = 6 // 8/8 = 3 étoiles, 6-7 = 2 étoiles, 0-5 = 1 étoile
export const RESULT_TITLES = { 3: 'MASTER OF GALAXIES', 2: 'WONDER WARRIOR', 1: 'ROOKIE PLUMBER' }

export const starsFor = (score, total) => (score === total ? 3 : score >= TWO_STARS_MIN ? 2 : 1)
const isCorrect = (question, choice) => question.correctAnswers.includes(choice)
const play = (src) => new Audio(src).play().catch(() => {})

// Aucun système de vies.
const initial = { screen: 'home', deck: [], index: 0, score: 0, coins: 0, selected: null }

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return { ...initial, screen: 'quiz', deck: action.deck }
    case 'home': // PLAY AGAIN : remise à zéro complète, retour à l'écran Home
      return initial
    case 'answer': {
      if (state.screen !== 'quiz' || state.selected !== null) return state // pas de double soumission
      const ok = isCorrect(state.deck[state.index], action.choice)
      return {
        ...state,
        selected: action.choice,
        score: state.score + (ok ? POINTS_PER_CORRECT : 0),
        coins: state.coins + (ok ? COINS_PER_CORRECT : 0),
      }
    }
    case 'next':
      if (state.screen !== 'quiz' || state.selected === null) return state
      return state.index + 1 >= state.deck.length
        ? { ...state, screen: 'result' } // fin du deck : jamais de question en trop
        : { ...state, index: state.index + 1, selected: null }
    default:
      return state
  }
}

export function useQuiz() {
  const [state, dispatch] = useReducer(reducer, initial)
  const locked = useRef(false)

  useEffect(() => {
  if (state.selected === null) {
    locked.current = false
    return
  }
  const ok = isCorrect(state.deck[state.index], state.selected)
  const delay = ok ? ADVANCE_DELAY_MS : WRONG_ADVANCE_DELAY_MS
  const timer = setTimeout(() => dispatch({ type: 'next' }), delay)
  return () => clearTimeout(timer)
}, [state.selected, state.index, state.deck])

  const answer = (choice) => {
    const question = state.deck[state.index]
    if (locked.current || state.screen !== 'quiz' || !question) return
    locked.current = true
    dispatch({ type: 'answer', choice })
    play(isCorrect(question, choice) ? successSound : errorSound)
  }

  const total = state.deck.length || QUIZ_LENGTH
  return {
    ...state,
    question: state.deck[state.index],
    total,
    stars: starsFor(state.score, total),
    start: () => dispatch({ type: 'start', deck: buildDeck() }),
    restart: () => dispatch({ type: 'home' }),
    answer,
  }
}
