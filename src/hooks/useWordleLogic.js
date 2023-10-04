import { useState } from 'react'

const useWordleLogic = (solution) => {
  const [guesses, setGuesses] = useState([...Array(6)])
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
    // Formats the guess as an array of letters comprising the guess
    // each letter is an object with a letter, an index and a colour property to see if the letter shares an index with the word
    // e.g. { letter: 'a', index: 0, color: grey } - letter is not in the word
    // e.g. { letter: 'e', index: 1, color: green } - letter is in the word and in the correct position
    // e.g. { letter: 'l', index: 2, color: yellow } - letter is in the word but not in the correct position
    const solutionArr = solution.split('')
    console.log(solution)
    let formattedGuess =  guess.split('').map((letter, index) => {
      // const isCorrectLetter = solutionArr.includes(letter)
      // check if letter is within the current solution and that it has not been counted already
      const isCorrectLetter = solutionArr.includes(letter) && solutionArr.indexOf(letter) === index
      const isCorrectPosition = solutionArr[index] === letter
      const color = isCorrectLetter ? isCorrectPosition ? 'green' : 'yellow' : 'grey'
      return { letter, index, color }
    })
    console.log(formattedGuess)

    return formattedGuess
  }

  /**
   * 
    * @param {Guess} guess to be formatted & checked against the word
    * 
  */
  const submitNewGuess = (guess) => {
    // Check if guess is correct
    if (currentGuess === solution) {
      setIsCorrectGuess(true)
    }

    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses]
      newGuesses[guessCount] = guess
      return newGuesses
    })

    setGuessHistory((prevGuessHistory) => [...prevGuessHistory, currentGuess])
    setGuessCount(() => { return guessCount + 1 })
    setCurrentGuess('')
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
      if (currentGuess.length !== 5) {
        console.log("Guess must be 5 letters")
        return
      }

      // Check if user has already guessed this word
      if (guessHistory.includes(currentGuess)) {
        console.log("You've already guessed this word")
        return
      }

      const formattedGuess = formatGuess(currentGuess)
      submitNewGuess(formattedGuess)
    }

    // Check if key is backspace
    if (key === 'Backspace') {
      // remove last letter from currentGuess
      setCurrentGuess(currentGuess.slice(0, -1))
    }
    
    // regex to check key is a letter
    const letterRegex = /^[a-zA-Z]$/

    // if key is a letter && currentGuess is less than 6
    if (letterRegex.test(key) && currentGuess.length < 5) {
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