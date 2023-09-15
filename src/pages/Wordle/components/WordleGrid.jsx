import React, { useState } from 'react';

function WordleGrid() {
  const [guesses, setGuesses] = useState(['', '', '', '', '', '']);
  const [currentGuess, setCurrentGuess] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(6);
  const [wordToGuess, setWordToGuess] = useState('APPLES');

  const handleInputChange = (event) => {
    const inputGuess = event.target.value.toUpperCase();
    if (inputGuess.length <= 6) {
      setCurrentGuess(inputGuess);
      console.log(currentGuess)
    }
  };

  const submitGuess = () => {
    if (currentGuess.length === 6) {
      const newGuesses = [...guesses];
      const isCorrectGuess = currentGuess === wordToGuess;

      newGuesses.push(currentGuess);
      if (!isCorrectGuess) {
        setAttemptsLeft(attemptsLeft - 1);
      }

      setGuesses(newGuesses.slice(1));

      if (isCorrectGuess) {
        alert('Congratulations! You guessed the word correctly.');
      } else if (attemptsLeft === 1) {
        alert('Game over. You are out of attempts.');
      }

      setCurrentGuess('');
    } else {
      alert('Please enter a 6-letter word to guess.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg">
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">Wordle Clone</p>
        <p className="text-sm text-gray-600">Attempts Left: {attemptsLeft}</p>
      </div>
      {guesses.map((guess, index) => (
        <div key={index} className="flex mb-2">
          {guess.split('').map((letter, letterIndex) => (
            <div
              key={letterIndex}
              className="w-8 h-8 bg-blue-200 text-center mr-2 rounded-full"
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
      <div className="flex">
        <input
          type="text"
          value={currentGuess}
          onChange={handleInputChange}
          maxLength="6"
          className="w-16 h-10 mr-2 border border-gray-300 rounded-md px-2"
        />
        <button
          onClick={() => submitGuess()} // Ensure that onClick is properly set
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default WordleGrid;
