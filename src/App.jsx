import { useState } from 'react'
import Grid from './components/Grid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Grid />
    </div>
  )
}

export default App
