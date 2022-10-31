import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './components/styles.css'
import { Nav } from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>PortFolio</h1>
      <Nav />
      </div>
  )
}

export default App
