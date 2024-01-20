import React from 'react'
import Guess from '../Guess'
import { range } from '../../utils.js'

function GuessResults({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {range(6).map(num => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  )
}

export default GuessResults
