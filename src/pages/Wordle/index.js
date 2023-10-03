import WordleGrid from "./components/WordleGrid"
import useWordleLogic from "../../hooks/useWordleLogic"
import { useEffect } from "react"

function Wordle() {

  const { currentGuess, handleKeyUp } = useWordleLogic()
  const solution = 'Wordle'

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg" tabIndex="0">
        <div className="text-center mb-4">
          <p className="text-lg font-semibold">Wordle Clone</p>
          <p className="text-sm text-gray-600">Attempts Left: {currentGuess}</p>
        </div>
      </div>
      <WordleGrid word={solution} />
    </div>
  )
}

export default Wordle