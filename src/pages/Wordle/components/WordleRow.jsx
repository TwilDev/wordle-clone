import React from 'react'

const WordleRow = ({ guess, currentGuess}) => {

  const getClassName = (guess) => {
    switch (guess.color) {
      case 'grey': 
        return 'wordle-row--grey'
      case 'yellow':
        return 'wordle-row--yellow'
      case 'green':
        return 'wordle-row--green'
      default:
        return ''
    }
  }

  if (currentGuess) {
    let letters = currentGuess.split('')
    return (
      <div className="text-center flex justify-center">
        {letters.map((letter, index) => {
          return (
            <div key={index} className='wordle-row'>
              {letter}
            </div>
          )
        })}
        {[Array(5 - letters.length).fill().map((_, index) => {
          return (
            <div key={index} className='wordle-row'></div>
          )
        })]}
      </div>
    )
  } else if (guess) {
    return (
      <div className="text-center flex justify-center">
        {guess.map((guess, index) => {
          console.log(guess)
          const className = `wordle-row guessed ${getClassName(guess)}`
          return (
            <div key={index} className={className}>
              {guess.letter}
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="text-center flex justify-center">
        <div className='wordle-row'></div>
        <div className='wordle-row'></div>
        <div className='wordle-row'></div>
        <div className='wordle-row'></div>
        <div className='wordle-row'></div>
      </div>
    )
  }
}

export default WordleRow
