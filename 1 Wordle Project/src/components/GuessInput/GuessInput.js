import React from 'react'

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (guess.length !== 5) {
      window.alert('ENTER 5 CHARACTERS or else:)))')
      return
    }

    handleSubmitGuess(guess)
    setGuess('')
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess: </label>
      <input disabled={gameStatus !== 'running'}
             required minLength={5} maxLength={5}
             id='guess-input' type='text' value={guess}
             onChange={(e) => setGuess(e.target.value.toUpperCase())} />
    </form>
  )
}

export default GuessInput
