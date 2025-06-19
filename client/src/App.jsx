import { useState } from 'react'
import React from 'react';
import './App.css'
import LandingPage from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import {Routes , Route} from 'react-router-dom'
import AddProduct from './components/AddProduct.jsx'
import ProjectList from './components/ProjectList.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/admin' element={<Admin />}>
          <Route index element={<AddProduct />} /> 
          <Route path='projectlist' element={<ProjectList />} /> 
        </Route>
      </Routes>
    
  )
}

export default App
