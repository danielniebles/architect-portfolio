import { useState } from 'react'
import logo from '../assets/main_logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{fontWeight: 700}}>Página en construcción...</h3>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
