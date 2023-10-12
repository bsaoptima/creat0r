import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AccountsPage from './pages/AccountsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/accounts' element={<AccountsPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
