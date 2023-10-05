import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
