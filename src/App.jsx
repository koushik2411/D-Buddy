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
import Alphabets from './kids/Alphabets'
import Animals from './kids/Animals'
import Shapes from './kids/Shapes'
import Fruits from './kids/Fruits'
import Inventions from './students/Inventions'
import IndianStates from './students/IndianStates'
import Mensuration from './students/Mensuration'
import CurrentAffairs from './students/CurrentAffairs'

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
        <Route path='/alphabets' element={<Alphabets/>}/>
        <Route path='/animals' element={<Animals/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/tables' element={<Tables/>}/>
        <Route path='/fruits' element={<Fruits/>}/>
        <Route path='/shapes' element={<Shapes/>}/>

        // STUDENTS
        <Route path='/Indian states' element={<IndianStates/>}/>
        <Route path='/current affairs' element={<CurrentAffairs/>}/>
        <Route path='/inventions' element={<Inventions/>}/>
        <Route path='/mensuration' element={<Mensuration/>}/>
        
        // UTILITY
        <Route path='/savings' element={<SavingsCalculator/>}/>
        <Route path='/bmi' element={<BmiCalculator/>}/>

      </Routes>
    </div>
  )
}

export default App