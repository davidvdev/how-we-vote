import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// import components
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Banner />
      
    </div>
  )
}

export default App
