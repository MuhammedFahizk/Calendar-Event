import { useState } from 'react'

import './App.css'
import LeftDiv from './components/LeftDiv'
import RightDiv from './components/RightDiv'

function App() {

  return (
    <>
    <div className=' flex-col gap-2 grid rounded-2xl p-5  grid-cols-2  m-14 '>
       <LeftDiv/>
       <RightDiv/> 
    </div>
    </>
  )
}

export default App
