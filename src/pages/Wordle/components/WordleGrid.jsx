import { useEffect } from "react"
import WordleRow from "./WordleRow"

function WordleGrid({ currentGuess, guesses, turn }) {

  useEffect(() => {
    console.log(guesses)
  }, [guesses, turn])

  return (
    <div className="wordle-grid">
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <WordleRow key={index} guess={guess} currentGuess={currentGuess} />
        }
        return <WordleRow key={index} guess={guess} />
      })}
    </div>

    )
}

export default WordleGrid;
