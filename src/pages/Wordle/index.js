import WordleGrid from "./components/WordleGrid"
import useWordleLogic from "../../hooks/useWordleLogic"
import { useEffect } from "react"

function Wordle() {
  const solution = 'words'
  const { currentGuess, handleKeyUp, guesses, turn } = useWordleLogic(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg" tabIndex="0">
        <div className="text-center mb-4">
          <p className="text-lg font-semibold">Wordle Clone</p>
          <p className="text-sm text-gray-600">Attempts Left: </p>
          Current word is {solution}
          <br></br>
          Current guess: {currentGuess}
          <WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        </div>

      </div>

    </div>
  )
}

export default Wordle