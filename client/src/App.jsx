import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/user/Login'
import Register from './Pages/user/Register'

const App = () => {
  return (
    <div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>
</div>
  )
}

export default App