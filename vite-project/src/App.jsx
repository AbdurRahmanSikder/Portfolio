import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Works from './components/Works/Works'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
      <Navbar />
      <Home />
      <Works />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
