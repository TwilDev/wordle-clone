import React from 'react'

const WordleRow = ({guess}) => {

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

  if (guess) {
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
