import { useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.withCredentials = true;

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
