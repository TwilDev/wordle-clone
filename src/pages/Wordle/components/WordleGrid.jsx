import useWordleLogic from "../../../hooks/useWordleLogic"
import { useEffect } from "react";

function WordleGrid({ word }) {
  const { currentGuess } = useWordleLogic(word)

  return (
    <div className="wordle-grid">
      Current word is {word}
      { currentGuess }
    </div>

    )
}

export default WordleGrid;
