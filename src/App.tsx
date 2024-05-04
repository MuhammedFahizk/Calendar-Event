import { useState } from 'react'

import './App.css'
import LeftDiv from './components/LeftDiv'
import RightDiv from './components/RightDiv'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import EventSlice from './Feathers/eventSlice'
import Button from './components/Button'
const store = configureStore({
  reducer :{
    event: EventSlice
  }
})
function App() {

  return (
    <>
    <div className=' flex-col gap-2 grid rounded-2xl p-5    grid-cols-2  m-14 '>
      <Provider store={store}>
       <LeftDiv/>
       <RightDiv/> 
      </Provider>

    </div>
    </>
  )
}

export default App
