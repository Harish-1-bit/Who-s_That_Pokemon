import Navbar from './components/Navbar'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard'
import Form from './components/Form'
import { PokeProvider } from './context/PokeContext'
import {  useState } from 'react'
import Start from './components/Start'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Game from './components/Game'
import { HiQuestionMarkCircle } from "react-icons/hi";



const App = () => {
  const [start,setStart]=useState(true)
  const handleStart=()=>{
    setStart(start?false:true)
  }
  return (
    <PokeProvider>
      <Navbar />
      <button className=' text-3xl absolute right-10 top-20' onClick={handleStart}><HiQuestionMarkCircle /></button>
      <Game/>
      <Start start={start} handleStart={handleStart}/>

    </PokeProvider>
  )
}

export default App
