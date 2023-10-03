import { useEffect } from "react";

function WordleGrid({ currentGuess, word, guesses, turn }) {

  useEffect(() => {
    console.log(guesses)
  }, [guesses, turn])

  return (
    <div className="wordle-grid">
      Current word is {word}
      <br></br>
      Current guess: {currentGuess}
    </div>

    )
}

export default WordleGrid;
