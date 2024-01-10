import { useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [user, setUser] = useState('user')
  return (
    <Routes>
      <Route path='/' element={<Login setUser={setUser}/>} />
      <Route path='/dashboard' element={<Dashboard user={user}/>} />
    </Routes>
  )
}

export default App
