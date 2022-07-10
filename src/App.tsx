import { useState } from 'react'
import logo from '../assets/main_logo.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h4 style={{fontWeight: 700}}>Página en construcción...</h4>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
