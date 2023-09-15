import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Wordle from './pages/Wordle'

const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/wordle', element: <Wordle />}
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
