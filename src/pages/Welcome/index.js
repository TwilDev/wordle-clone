import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/wordle">Play</Link>
    </div>
  )
}

export default Welcome