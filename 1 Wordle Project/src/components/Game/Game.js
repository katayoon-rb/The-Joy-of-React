import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'


const answer = sample(WORDS)
console.info({ answer })

function Game() {
  const [gameStatus , setGameStatus] = React.useState('running')
  const [guesses, setGuesses] = React.useState([])

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)

    if (guess === answer) { setGameStatus('won') }
    else if (nextGuesses.length >= 6) { setGameStatus('lost') }
  }

  console.log(answer)

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      {gameStatus === 'won' && ( 
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === 'lost' && ( 
        <LostBanner answer={answer} />
      )}
    </>
  )
}

export default Game
