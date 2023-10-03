import { useState } from 'react'

const useWordleLogic = (word) => {
  const [guesses, setGuesses] = useState([])
  const [guessCount, setGuessCount] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [isCorrectGuess, setIsCorrectGuess] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [guessHistory, setGuessHistory] = useState([])

  /**
   * 
   * @param {Guess} to be formatted 
   * @returns {Guess[]} array of letters in the guess
  */
  const formatGuess = (guess) => {
    console.log("Formatting Guess " + currentGuess)
    return guess.toLowerCase().split('')
  }

  /**
   * 
    * @param {Guess} guess to be formatted & checked against the word
    * 
  */
  const submitNewGuess = (guess) => {

    const formattedGuess = formatGuess(guess)
    setGuesses([...guesses, formattedGuess])
  }
  
  /**
   * 
   * @param {e} event from input field
   * 
  */
  const handleKeyUp = (e) => {
    const { key } = e
    console.log(key)

    //Check if  key is enter
    if (key === 'Enter') {
      if (currentGuess.length !== 6) {
        console.log("Guess must be 6 letters")
        return
      }

      // Check if user has already guessed this word
      if (guessHistory.includes(currentGuess)) {
        console.log("You've already guessed this word")
        return
      }

      submitNewGuess(currentGuess)
    }

    // Check if key is backspace
    if (key === 'Backspace') {
      // remove last letter from currentGuess
      setCurrentGuess(currentGuess.slice(0, -1))
    }
    
    // regex to check key is a letter
    const letterRegex = /^[a-zA-Z]$/

    // if key is a letter && currentGuess is less than 6
    if (letterRegex.test(key) && currentGuess.length < 6) {
      // add key to currentGuess
      setCurrentGuess(currentGuess + key)
    }
  }

  return {
    guesses,
    guessCount,
    currentGuess,
    isCorrectGuess,
    isGameOver,
    handleKeyUp
  }
}

export default useWordleLogic