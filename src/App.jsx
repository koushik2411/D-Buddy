import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import KidsHome from './pages/KidsHome'
import StudentsHome from './pages/StudentsHome'
import UtilityHome from './pages/UtilityHome'
import Header from './components/Header'
import Tables from './kids/Tables'
import Calculator from './pages/Calculator'
import BmiCalculator from './utility/BmiCalculator'
import Counter from './kids/Counter'
import SpiritualHome from './pages/SpiritualHome'
import SavingsCalculator from './utility/SavingsCalculator'

function App() {
  
  return (
    <div className=' min-h-screen dark:bg-slate-800 dark:text-slate-100'>
      <Header/>

      <Routes>
        // HOMES
        <Route path='/' element={<Home/>}/>
        <Route path='/kids' element={<KidsHome/>}/>
        <Route path='/students' element={<StudentsHome/>}/>
        <Route path='/utility' element={<UtilityHome/>}/>
        <Route path='/spiritual' element={<SpiritualHome/>}/>
        <Route path='/calculator' element={<Calculator/>}/>

        // KIDS
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/tables' element={<Tables/>}/>

        // STUDENTS
        
        // UTILITY
        <Route path='/savings' element={<SavingsCalculator/>}/>
        <Route path='/bmi' element={<BmiCalculator/>}/>

      </Routes>
    </div>
  )
}

export default App