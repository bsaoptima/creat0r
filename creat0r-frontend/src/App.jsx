import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AccountsPage from './pages/AccountsPage'
import SideNavBar from './components/SideNavBar'
import NavBar from './components/NavBar'
import 'flowbite';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col'>
        <NavBar />

        <div className='md:flex md:flex-1'>
          <SideNavBar />
          <div className='md:flex-1'>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/accounts' element={<AccountsPage/>} />
            </Routes>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
