import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './components/styles.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import { ScrollUpButton } from './components/ScrollUpButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
     
      <Nav />
      <Hero />
      <About />
      <Works />
      <ScrollUpButton />
      </div>
  )
}

export default App
